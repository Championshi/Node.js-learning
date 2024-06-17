const jsonstring = '{"name": "abhi", "age":22,"city":"New York"}';
const jsonobject = JSON.parse(jsonstring);//convert JSON string to object
console.log(jsonobject.name);// output: abhi

/*************************object to sting************************** */
const objectToConvert = {name:"Alice",age:25};
const jsonString = JSON.stringify(objectToConvert);//convert object to JSON string
console.log(jsonString);// output:{"name":"Alice","age":25}

/**imagine a menu card in restaurant => lots of options are there
 * each option will give you a different order now collection of
 * that list = menu card=API's and an option in that list = Endpoint
 * 
 * API=> menu card of restaurant act as API and the item in that menu 
 is defined as end points 
 */

 /*********************creating server*****************************/
// => to serve restaurant food we need to have server(waiter in hotel)
// =>creating a server in NodeJs via ****EXPRESS*****Package
// =>Express.js is a polular framework for building WEB APPLICATION and API's using Node.js
// =>now we create a server == waiter
// => now the waiter has his own home
//=>in simple terms localhost refers to your own computer
// =>port Number
// =>lets suppose in a building -100 rooms are there, for someone to reach
// he must know the room number right and that is port number
// to take data from input we use POST method not get
