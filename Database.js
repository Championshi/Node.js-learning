/**********************Database**************************************///
//=> web development = client + server + database
//=> lets suppose if we sre going to open restuarant there is lots of data around it
//=> each person details(like:- chef,owner, manager,waiter) its name,age,work,email, mobile etc
//=> menu details(like:- drinks,snacks,main course)
//=> this all data we must have to store to run a fully functional restaurant
//=> So we have to deal with data
//=> there are lots of database out there in the market we can use according to our need
//=> SQL, PostgreSQL, mongoDB,  Oracle --node->  types of databases

const { identity } = require("lodash");


/**************databases***************************************/
//=>databases typically have their own server system to manage and provide access to the data they store
//=>this server is system is seperated from node.js server but work togeteher to create dynamic web application
//=> database server stores you appllication data when your node.js server needs data
//=> it sends request to the database server which then retrives and sends the requested data and back to the node.js server
//=>Node.js server is responsible for handling HTTP request from clients and returning responses
//=> it process these requests, communicates with the databases  server and sends data to clients

//=> you should know about any database communication language like - SQL,POSTRESQL,e.t.c
//=> to interact with database to make then work like we want 
//we can perform these operation in databases like:-CREATE , DELETE, UPDATE, SEE records
//BUT it is easier to perform these operation using SQL rather than MONGODB syntax
//like we make database , table, etc using this
//example in mongoDB we perform=db.users.insertOne({id:2,username:'Abhi',age:22});

//similary in SQL we;-> create TABLE users(
//   id INT PRIMARY KEY,
//   username VARCHAR(50),
//   age INT
//  ); and insert like this:->INSERT INTO users(id, username, age)
//                         :->    VALUES(1,'Alice',25)
// POSTMAN -> it is tool that helps in how frontend makes data for you and on which API it calls
