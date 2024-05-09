//data type

//primitive (In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.) 
//There are 7 primitive data types:

//7 types: string, Number, Boolean, null , undifined, symbol, BigInt

//const score = 100
//const scoreValue = 100.3

//const isLoggedIn = false
//const outsideTemp = null
//let userEmail;


//const id = Symbol('123')
//const anotherId = Symbol('123')

//sumbole give the like unique value in a program.if we have same value of diffrent variable then the symbole says that not the both value is same.

//console.log(id===anotherId);

//const bigNumber = 123456789n //when we use the 'n' in the last of number then it automaticaly convert into BigInt value.

//Refrence (Non Primtive)

//Array, Object, Function

//const heros = ["shaktiman", "ironman", "batman"]; //(Array)

//let myObj = {

   // name:"saquib"
   // age:24
//}  // (Object)


//Function(){} (syntax of Function)
//const myFunction = function(){

   // console.log("Hello world");
//}


//--------------------------------------------------------------------------------------

// Memory in javascript

// Tow types of memory ( Stack , Heap ) 
// Stack (Stack use primitrive data type),(In stack memory when we chamge the value the value can be chamge in copy value)
// Heap (Heap use Non Primitive data type) ,(In Heap when we change the value the value is change in orginal value)

let myName = "Saquib"

let anotherName = myName
anotherName = "kolkata"

console.log(myName);
console.log(anotherName);

let userOne =  {
    email: "saquib@abc.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sadik@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);