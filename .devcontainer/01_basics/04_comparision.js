//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 <= 1);
//console.log(2 ==1);
//console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

//=== always comperision same data type value

console.log(null > 0); (result "false")
console.log(null == 0); (result "false")
console.log(null >= 0); (result "true")

//=== The reasone of giving the result as false, false, true is that
//=== The reasone is that an equality check(==) and comperision(> < >= <=) work diferently.
   // Comperision convert null to a number, treating it as 0.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//=== ( "===" it gives strict cheak it means it also cheak data type of given value)

console.log("2" === 2);
