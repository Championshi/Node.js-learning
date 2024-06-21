//mongoose provide communication between node.js and databases(mongodb)
//like in node.js if we start server we got //localhost:3000/any name  at server same happen in mongodb
//momgodb has also it's own server and its port is ---> mongodb://localhost:27017/mydatabase(any name)
// const mongoose = require('mongoose');
//const mongoUrl = 'mongodb://localhost:27017/hotel'; // here we store data in hotel name database ==> local server  of DB mongoDB
// const mongoUrl = process.env.MONGODB_URL_LOCAL //  .env file for local database excess in .env file just above this is not a good practice but it can be done using that also
const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGODB_URL;  // for global database excess in .env file 

//************************HOSTING SERVER IN NODE.JS  BEGINING TO THE END ***********************************GLOBAL SERVER******************/
// ALL DATA OPERATION IS PERFORMED IN A LOCAL DATABASE, SO LETS HOST OUR DATABASE SERVER AND MAKE OUR DB ONLINE PRESENCE  AND ACESSIBLE TO EVERY ONE 
// MONGODB ATLAS PROVIDES A FREE-CLUSTER FOR USERS WHERE YOU CAN HOST YOUR DATABASE FOR FREE

/*************************************THIS IS GLOBAL DATABASE SERVER  */
//const mongoUrl = 'mongodb+srv://abhi629941:kumar246@clusternode.ojdixue.mongodb.net/?retryWrites=true&w=majority'//=> but this is not good practice in company you need  to make seperate file for url 
//which is .ENV FILE

// setup mongodb connection URL

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// get the default connection
// mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

// define event listeners for database connection
db.on('connected', () => {
    console.log('Database connected successfully');
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected ');
});

db.on('error', (err) => {
    console.error('Database connection error:', err);
});

//export database connection and import it in mainserver.js
module.exports = db;

/*************************MAIN OUTCOMES********************************/
// to sum it up, the**db.js** file acts as a central module that manages the 
//connection to your MongoDB database using Mongoose.it sets up the connection, handles connection events
//and exports the connection object so that your Express.js serever can use it to interact with database
//when your server runs it typically requires or imports this db.js file to establish
//the database connection before handling HTTP requests
/**************************models or schema*****************************/
// models are like a blueprint of our database
//once you defined a model , you can create , read, update and delete documents in the corresponding mongodb collection
//create Models folder and inside that create person.js see example inside that go and see


