//data type

//primitive

//7 types: string, Number, Boolean, null , undifined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

//sumbole give the like unique value in a program.if we have same value of diffrent variable then the symbole says that not the both value is same.

console.log(id===anotherId);

const bigNumber = 123456789n //when we use the 'n' in the last of number then it automaticaly convert into BigInt value.

//Refrence (Non Primtive)

//Array, Object, Function

const heros = ["shaktiman", "ironman", "batman"]; //(Array)

let myObj = {

    name:"saquib"
    age:24
}  // (Object)


//Function(){} (syntax of Function)
const myFunction = function(){

    console.log("Hello world");
}
