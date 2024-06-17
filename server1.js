/***********************lodash packages****************************/
// lodash what can do
var _ = require('lodash');
/***********using this we get unique variable***************/
var data = ["person", "person", 1, 2, 3, 4, 2, 'name', 'age', '2'];
var filter = _.uniq(data);
console.log(filter);





var fs = require('fs'); // fs = filesystem liberary is function in Node.js
var os =require('os');  // we can find this in Node.js website docs
var notes= require('./notes.js')// any file can imported like this 
// imported from notes.js file
var age = notes.age;
console.log(age);
// imported from notes.js file 
var res = notes.addnumber(age+34, 45);
console.log(res);

/***************************************************** */
var user = os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt','Hi'+ user.username + '!\n',()=>{
    console.log('file is created');
})