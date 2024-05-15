function sayMyName () {

    console.log("S");
    console.log("a");
    console.log("q");
    console.log("u");
    console.log("i");
    console.log("b");

}

//sayMyName()

function addTwonum(number1, number2){
    console.log(number1+ number2);

}

//addTwonum(5,3)
//addTwonum(3, "4")
//addTwonum(3, null)

function addTwonum(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwonum(5, 3)
console.log("Result:" , result);

function addTwonum(number1, number2){
    return number1 + number2
}

console.log(addTwonum(5,2));

function multiply(a ,b){
    return a + b;
}

console.log(multiply(2,2));

function loginUserMassage(username){
    return `${username} just loged in`
}

console.log(loginUserMassage("Saquib"));

function loginUserMassage(username){
    if(username === undefined){
        console.log("Please enter username");
        return
    }
}

console.log(loginUserMassage());

function calculateCartprice(...num1){
    return num1
}

console.log(calculateCartprice(200,400,600));

const user = {
    username: "saquib",
    Price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 600, 300]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(myNewArray));