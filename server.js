
// var add =(a,b)=>{return a+b;}
// var res = add(6,8);
// console.log(res);

/***************long way to implement callback function**************/
//callback is a function which is passed as argument in another function
//it is synchronous code
 function callback(){
    console.log('hi, abhinav this side learning  callback sucessfully')
 }

 function add(a,b,callback){
    var res = a+b;
    console.log(a+b);
    callback();
 }
 add(8,8,callback);

/**************short wat to implement callback function**************/

function add(a,b,abhi){
    var res = a+b;
    console.log(res);
    abhi();
}
// add(4,7,function(){
//     console.log('task completed');
// })
add(2,3,()=> console.log('task completed'))

/*********************asynchronous function of callback*****************/ 
function add(a,b){
    console.log(a+b);
}
setTimeout(()=>{
    add(5,8);
},3000);//it print the value after 4 sec

// => another example =>

    let btn= document.getElementById('btn')

    btn.addEventListener("click",function(){

        setTimeout(()=>{
    headling1.style.colour ='green';
    setTimeout(()=>{
    headling1.style.colour ='blue';
    setTimeout(()=>{
        headling1.style.colour ='blue'; 
    }1000)
    }1000);
    
        }1000)
    
    })

/*********multiple nested callbacks is called callback hell*********/
// => it decrease the readibility og the code 

