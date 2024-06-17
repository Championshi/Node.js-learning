const express = require('express');
const router = express.Router();
const person = require('./../models/Person.js');


router.post('/',async(req,res) => {
    try{
        const data = req.body // assuming the request body contains mongoose model and it get all the input data initally here then to databses 
    
        // create a newPerson using mongoose model // using this we can store upcoming data to define fields in mongoose  parameter check it satisfaction and store in database
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
        }
        catch(error){
          console.log(error);
          res.status(500).json({error:'Internal Server Error'});
        }
    })

    router.get('/',async(req,res)=> {
        try{
            const data = await person.find();
            console.log('data fetched');
            res.status(200).json(data);
        }
        catch(error){
          console.log(error);
          res.status(500).json({error:'Internal Server error'});
        }
    })

    router.get('/:workType',async(req,res)=> {
        try{
             const workType = req.params.workType; //Extract the work type from URL parameter
             if(workType == 'waiter'  || workType == 'manager'  || workType == 'chef'){
                const response = await person.find({work: workType});
                console.log('response fetched')
                res.status(200).json(response);
             }else{
                res.status(404).json({error: 'Invalid work type'});
             }
        }catch(error){
            console.log(error);
            res.status(404).json({error: 'Internal Server Error'});
        }
    })
/*********************************************UPDATE OPERATION USING -----> PUT METHOD ****************************************************************/
//=> FOR UPDATION WE NEED TWO THINGS
// 1.->Which record we want to update
// 2.-> what exactly we want to update 
// what is UNIQUE identifier in a document in a  collection ==> it's _id which is given by mongodb itself , we will use this  to find the particular record which we want to update
// and now we will send the data as same as like we did in POST  method
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // extract the id from the url parameter
        const updatedPersonData = req.body; // body parser saves the data sent by the client in req.body

        const response = await person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // return the updated document
            runValidators: true, // run mongoose validation
        });

        if (!response) {
            return res.status(404).json({ error: 'person not found' }); // if no person exists with the given unique id
        }
        console.log('data updated');
        res.status(200).json(response);
    } catch (error) {

        console.log(error);
        res.status(404).json({ error: 'Internal Server Error' });
    }

});

/*****************************************************DELETE OPERATION USING ----> DELETE METHOD *************************************************/
// FOR DELETION NWE NEED ONE THING  ====> WHICH RECORD WE WANT TO DELETE **********************************************************
// => what is UNIQUE identifier in a document in a  collection ==> it's _id which is given by mongodb itself , we will use this  to find the particular record which we want to DELETE
router.delete('/:id',async(req,res) =>{
    try{
     const personId = req.params.id;
     const response = await person.findByIdAndDelete(personId);
     if(!response){
        return res.status(404).json({ error: 'person not found' });
     }
     console.log('data updated');
        res.status(200).json({message:'person Deleted Successfully'});

    }catch(error){

        console.log(error);
        res.status(404).json({ error: 'Internal Server Error' });
    }
}) 
// git command AND deployment  of project for every one 

    module.exports = router;
    
    