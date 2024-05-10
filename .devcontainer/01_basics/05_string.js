//const name = "saquib"
//const repocount = 50

//console.log(name + repocount + "value"); (this is bad habit and old syntex to write the code)

//Lets see new model to write the code 
// always use backticks (``)

//console.log(`Hello my name is ${name} and my repocount is ${repocount}`); // (always use this syntex to write the code)

const gameName = new String('saquib-nn-com')
console.log(gameName[0]);
console.log(__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('q'));
console.log(gameName.charCodeAt('0'));
console.log(gameName.at(5));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-8,4)
console.log(anotherString);

const newStringone = "    saquib   "
console.log(newStringone);
console.log(newStringone.trim());
console.log(newStringone.trimEnd());

const url = "http://saquib.com/saquib%20ansari"

console.log(url.replace('%20', '_'));

console.log(url.includes('sadik'));

console.log(gameName.split('-'));

const text1 = "hello"
const text2 = " world"
const text3 = text1.concat("",text2)
console.log(text3);
