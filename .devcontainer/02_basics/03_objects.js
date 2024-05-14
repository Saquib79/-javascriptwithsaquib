//Singleton
//Object.create

//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "saquib",
    [mySym]: "myKey1",
    age: 20,
    location: "jaipur",
    email: "saquib@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Satuarday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);// (This is better way to write the object)
console.log(JsUser[mySym]);

JsUser.email = "sadik@gmail.com"
//Object.freeze(JsUser)
JsUser.email= "khubaib@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js usre");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greetingTwo());