
<h1> DOCUMENTATION
</h1>

<h3> Standard formats for requests and responses for each endpoint.
</h3>


<h4> CREATE PERSON REQUEST
</h4>

<p>METHOD: POST
</p>
<p>URL: [POST](https://task2-kxro.onrender.com/api)
</p>
<p>EXAMPLE BODY
</p>
<code>
 {
 "firstName": "Bright",
 "lastName": "Agu",
  "otherName": "Chidubem",
 "uniqueName": "bub_bryso",
  "email": "brightagu2@gmail.com",
  "description": "I am a sotfware developet"
}
</code>

<p>EXPECTED RESPONSE
</p>
<code>
{
    "firstName": "Bright",
    "lastName": "Agu",
    "otherName": "Chidubem",
    "uniqueName": "bub_bryso",
    "email": "brightagu2@gmail.com",
    "description": "I am a sotfware developet",
    "_id": "65004c841d55134345cb2eee",
    "__v": 0
}
</code>


<h4> FETCH PERSON DETAIL REQUEST
</h4>
<p>METHOD: GET
</p>
<p>URL: [GET](https://task2-kxro.onrender.com/api/65004c841d55134345cb2eee)
</p>
<p>EXPECTED RESPONSE
</p>
<code>
{
    "firstName": "Bright",
    "lastName": "Agu",
    "otherName": "Chidubem",
    "uniqueName": "bub_bryso",
    "email": "brightagu2@gmail.com",
    "description": "I am a sotfware developet",
    "_id": "65004c841d55134345cb2eee",
    "__v": 0
}
</code>

<h4> UPDATE PERSON DETAIL REQUEST
</h4>
<p>METHOD: PATCH
</p>
<p>URL: [GET](https://task2-kxro.onrender.com/api/65004c841d55134345cb2eee)
</p>
<p>EXAMPLE BODY: Updating person's firstName and email
</p>
<code>
 {
 "firstName": "Chidubem",
  "email": "brysontech2020@gmail.com",
}
</code>
<p>EXPECTED RESPONSE
</p>
<code>
{
    "firstName": "Chidubem",
    "lastName": "Agu",
    "otherName": "Chidubem",
    "uniqueName": "bub_bryso",
    "email": "brysontech2020@gmail.com",
    "description": "I am a sotfware developet",
    "_id": "65004c841d55134345cb2eee",
    "__v": 0
}
</code>

<h4> DELETE PERSON 
</h4>
<p>METHOD: DELETE
</p>
<p>URL: [GET](https://task2-kxro.onrender.com/api/65004c841d55134345cb2eee)
</p>
<p>EXPECTED RESPONSE
</p>
<code>
{
    "success": "true"
}
</code>

<h3> Instructions for setting up and deploying the API locally or on a server.
</h3>
<h3>deploying locally</h3>
<div align="center">
    <a href="https://app.diagrams.net/#G17JFHIC1ulqoZVUTJ1Fliofg0GiR7N3dD" target="_blank"> click to view the uml diagram
</a>
</div>

<h3>HOW TO SETUP
</h3>
<p>==> Clone the repository
</p>
<p>==> Create a mongodb cluster or setup a mongodb service on you machine if available.
</p>
<p>==> crete a .env file in the root directory
</p>
<p>==> get you connection string and add it to the .env file
</p>
<p>==> add a PORT in the env and set it to 5000 or any port number of your choice
</p>
<p>==> add a MONGO_URI in the env and set it to your mongoDb connection string
</p>
<p>==> add a NODE_ENV in the env, set it to PRODUCTION
</p>
<p>==> run the command on your terminal: npm install
</p>
<p>==> run the command on your terminal: node app.js 
</p>
<p>==> the program should start running
</p>

<h3>THE SOURCE CODE FOR THE API:</h3>
<p>https://github.com/Agu-Bright/task2/blob/master/app.js </p>

<h3>UML diagrams (or links to view them)</h3>
https://app.diagrams.net/#G17JFHIC1ulqoZVUTJ1Fliofg0GiR7N3dD

<h3> Technolgy used</h3>
<ul>
    <li>NodeJS</li>
    <li>MongoDb</li>

</ul>

</p>




