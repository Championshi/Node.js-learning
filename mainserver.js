/*************************Creating Server****************************/
// => there are lots of methods out there to send or receive data according to their needs
// => GET, POST(create data), PATCH/PUT(update data), DELETE 
// => imagine you want to read books ona library self you don't chane anything
// you just want to get the information

// => GET -> methos is used to request data from the server 
// => PERFORM OPERATION ON WEB BROWSER THIS:-> run node mainserver.js in terminal
//  then in browser paste this localhost:3000/ and press Enter
const express = require('express')
const app = express();
const db = require('./db.js');// database server 
// const MenuItem = require('./models/menu.js')

const bodyParser = require('body-parser'); 
app.use(bodyParser.json());


const person = require('./models/Person.js'); // model created  for the defined user input / output or say rules are defined in this 
//establish a connection for menu.js defined model by it self 
const MenuItem = require('./models/menu.js')


// to get detail from client and saved in databases using POST method
// ./person pe hit krega aur sara data saved ho jyega to hit or click on that we use POSTMAN to work as frontend for them we give input data through POSTMAN HERE bcz we havent not created any frontend here 


// this  code is shifted in routes folder to maintain mainserver.js file readibility
// app.post('/person',async(req,res) => {
// try{
//     const data = req.body // assuming the request body contains mongoose model and it get all the input data initally here then to databses 

//     // create a newPerson using mongoose model // using this we can store upcoming data to define fields in mongoose  parameter check it satisfaction and store in database
//     const newPerson = new person(data);
//     const response = await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);
//     }
//     catch(error){
//       console.log(error);
//       res.status(500).json({error:'Internal Server Error'});
//     }
// })




// it is for menu.js model save data in database homework question

app.post('/menu', async (req, res) => {
    try {
        const data = req.body;

        // create a new MenuItem using mongoose model
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// use GET  to know the informaition from the database saved file above 
// to get the menu items from the database using GET method



app.get('/menu', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('menu items fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.mobile = data.mobile;  => insted of this we use single line to move data to server of node.js which is defined above  this is time conduming process
    // newPerson.email = data.email;
    // newPerson.address = data.address;
//     newPerson.save((error,savedPerson)=> { // callback function it reduce readabiliy  so insted of this use async and await methos to avoid callback
//         if(error){
//             console.log('Error in  saving person:',error);
//             res.status(500).json({error:'Internal server error'})
//         }else{
//             console.log('data saved sucessfully');
//             res.status(200).json(savedPerson);
//         }
//     })
// })

//  to get the user detail from databases using GET method
//=> browser is generally GET method which gives us the data we want



// this  code is SHIFTED in routes folder to maintain mainserver.js file readibility
// app.get('/person',async(req,res)=> {
//     try{
//         const data = await person.find();
//         console.log('data fetched');
//         res.status(200).json(data);
//     }
//     catch(error){
//       console.log(error);
//       res.status(500).json({error:'Internal Server error'});
//     }
// })




// for different parameter to get specific user datail from person like :- manager , waiter, chef detail


// this  code is SHIFTED in routes folder to maintain mainserver.js file readibility
// app.get('/person/:workType',async(req,res)=> {
//     try{
//          const workType = req.params.workType; //Extract the work type from URL parameter
//          if(workType == 'waiter'  || workType == 'manager'  || workType == 'chef'){
//             const response = await person.find({work: workType});
//             console.log('response fetched')
//             res.status(200).json(response);
//          }else{
//             res.status(404).json({error: 'Invalid work type'});
//          }
//     }catch(error){
//         console.log(error);
//         res.status(404).json({error: 'Internal Server Error'});
//     }
// })




/****************************************IMPORTANT   AS THERE ARE LOTS OF   API    IN MAINSERVER.JS FILE LIKE POST  AND GET METHOD OF PERSON, SIMILARLY FOR MENU.JS POST AND GET METHOD IS THERE , AND SOME PARAMETRIZED CALL  */
/***************************************** IT GENERALLY MESHUP THE FILE AND REDUCE THE CODE READIBILITY SO TO PERFORM THIS CRUD OPERATION ASSIGN THEM IN SEPERATE FILE***********************  */
/***********************************SO YOUR SERVER .JS FILE FILE LOOKS CLEar   READABLE *****************************************/
/********************LIKE INITIALLY WE WOULS DONE THIS FOR PERSON.JS API AND RUN THIS THEN SAME FOR MENU.JS API  MAKE FOLDER NAME ROUTES INSIDE THAT MAKE PERSONROUTER.JS FILE AND THEN  IMPORT EXPRESS AND REPLACE APP== ROUTER AND USE EVERYWHERE ROUTER.GET OT ROUTER.POST ETC*/
/*** SIMILARLY WE CAN SHIFT MENU.JS  API TO ROUTES FOLDER THIS IS YOUR TASK TO COMPLETE */

app.get('/',function(req,res){
    res.send('Hello sir Welcome to My restaurants... how may i help you')
}) 

// initial learning code of how to create server 
// app.get('/milk',function(req,res){
//     res.send('sure sir, i would love to serve milk')
// })
// app.get('/idli',function(req,res){
//     var customized_idli ={
//         name: 'milk idli',
//         size: '10 cm diameter',
//         is_sambhar: true,
//         is_chutney:false
//     }
//    res.send(customized_idli)
// })
// // to get input data from client check it in postman
// app.post('/person',function(req,res){
//     res.send("data is recieved")
// })

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, function () {
//     console.log(`Listening to port ${PORT}`);
// });

// import router file here 
const personRoutes = require('./routes/personRoutes.js');

//use the router files
app.use('/person', personRoutes);

app.listen(3000,function(){
    console.log('listening to port 3000')// if we want to know our server is live use console in this
})

// port number mtlb waiter yeha pe milega
// postman is used inplace  of frontend to ->get, post, update data to check its working properly or not
//in frontend there is form in which we fill data and then it goes to API by hiting click and then to server database 
//so in backend we cant create form so we use postman to check it functionality
// to establish communication between NODE.JS  and MONGODB  we need driver who can understand Node.js language(javascript)
// and interperates it to database so they can store and update data
// we need to INSTALL THAT DRIVER  like:-mongodb, mongoose and here we use mongoose
// for communication between  them it acts as translator

// mongoose it better with this you can define how your data should look, like making a blueprint for your documents.it's like saying, in our database,each person's
// information will have a mane,age,and email, this make sure your data stays organized not accept the unmentioned data extra data
// it checks to put correct data 