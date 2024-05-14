//const tinderUser = new Object() // (This is singletone object)

const tinderUser = {
    id :"113abc",
    name: "sammy",
    isLoggedIn: false

}
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    Userfullname: {
        firstname: "Md Saquib",
        lastname: "Ansari"
    }
}

console.log(regularUser.Userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = Object.assign({}, obj1,obj2,obj3)
//console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

const users = [
    {
        id: 1,
        email: "saquib@gmail.com"
    },

    {
        id: 1,
        email: "saquib@gmail.com"
    },

    {
        id: 1,
        email: "saquib@gmail.com"
    },

    {

    }
]

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));