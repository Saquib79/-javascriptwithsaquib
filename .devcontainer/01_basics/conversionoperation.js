//let score= "33abc"
//let score= null
//let score=undefined
//let score=Boolean
//let score="saquib"

//console.log(typeof score);
//console.log(typeof(score));

//let valueInNumber= Number(score) (it always gives the num value if we pass the string bcz of use valueInNumber it force fully convert the string or oter value into number)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33 (coversion gives as also num value data type)
// "33abc" =>NaN (conversion gives as NaN value data type)
// true => 1; false =>0 (boolean value gives result in 1 and 0 form)

//let isLoggedIn= 1

//let booleanIsLoggedIn= Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

//let someNumber = 33
//let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);



// *********** Operation************//

let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/2);
//console.log(2%2);

let str1 = "Saquib"
let str2 =  " sadik"
let str3 = str1 + str2

console.log(str3);

console.log("1" + 2); (result 12  "bcz of the first value is string")
console.log(1 + "2"); (result 12  "first is num then add string")
console.log("1" + "2"); (result 12 "it automatically write both string side by side)
console.log("1" +2 +2); (result 122 "bcz of first value is string it take all the value as string afte the string)
console.log(1 + 2 + "2") (result 32 "bcz of it first add both num and write string value beside it)
  

let gameCounter = 100
//gameCounter++;
++gameCounter
console.log(gameCounter);
