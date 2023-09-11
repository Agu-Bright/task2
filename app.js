require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const Person = require("./model/person");
const connectDB = require("./db/connectDb");
const errorMiddleware = require("./middlewares/error");
const catchAsyncError = require("./middlewares/catchAsyncError");
const ErrorHandler = require("./utils/errorhandler");

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// CREATE: Adding a new person.  =>/api
app.post(
  `/api`,
  catchAsyncError(async (req, res, next) => {
    const personData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      otherName: req.body?.otherName,
      uniqueName: req.body.uniqueName,
      email: req.body.email,
      description: req.body.description,
    };
    const person = await Person.create(personData);
    res.status(200).json(person);
  })
);

//Fetching details of a person.  => /api/user_id
app.get(
  `/api/:id`,
  catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const person = await Person.findById(id);
    if (!person) {
      return next(new ErrorHandler("No person with this id found", 404));
    }
    res.status(200).json(person);
  })
);

// // UPDATE: Modifying details of an existing person => /api/user_id
app.patch(
  `/api/:id`,
  catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const person = await Person.findById(id);
    if (!person) {
      return next(new ErrorHandler("No person with this id found", 404));
    }
    const update = {
      firstName: req.body?.firstName,
      lastName: req.body?.lastName,
      otherName: req.body?.otherName,
      uniqueName: req.body?.uniqueName,
      email: req.body?.email,
      description: req.body?.description,
    };
    const newPerson = await Person.findByIdAndUpdate(id, update, {
      new: true,
      runValidator: true,
      useFindAndModify: false,
    });

    res.status(200).json(newPerson);
  })
);

// // DELETE: Removing a person => /api/user_id
app.delete(
  `/api/:id`,
  catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const person = await Person.findByIdAndDelete(id);
    if (!person) {
      return next(new ErrorHandler("No person with this id found", 404));
    }
    res.status(200).json({ success: "true" });
  })
);

app.use(errorMiddleware);

//starting the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT: ${PORT}`));
  } catch (error) {
    console.log(error.message);
    console.log("Shutting down the server due to unhandled promise rejection");
    process.exit(1);
  }
};
start();
