/*****************defining models and schema***************************** */
//defining structures and data which will be needed to from client or restriction which will not or which is necessary to input for further process

const mongoose = require('mongoose');
// define the person schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true  // this indicate that it should be essentially required without filling your name cant proceed it gives error
    },
    age:{
        type:Number
    },
    work:{
        type: String,
        enum:['chef','waiter','manager'],//likeit only accept work input when then three filled otherwise not accept the input data bcz it is predefined initally 
        required: true 
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true // it means all members emails sould be different 
    },
    address:{
      type:String
    },
    salary:{
        type:Number,
        required: true
    }//model created
})
const person = mongoose.model('person',personSchema);
module.exports = person;