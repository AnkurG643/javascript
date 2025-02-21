//singleton
//object.create

//object literals
const jsUser={
    name:"Ankur",
    age:18,
    sex:"M",
    isloggedin:false,
    email:"ankur@gmail.com",
    "full name":"ankur goswami"
    
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);

const mysym= Symbol("key1")