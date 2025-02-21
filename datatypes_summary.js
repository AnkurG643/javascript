// # primitive--->call by value

//7 types : string Number Boolean null undefined symbol BigInt

const score=100
const scorevalue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')
//console.log(id===anotherid);


const bigNumber=326786878572972979899n



// #Non premitive---->call by reference

//Array Object Functions

const heros=["iron man","thor","ant man"]
let myobj={
    name:"Ankur",
    age:21
}

const myFunction=function(){
    console.log("hello world");
}
//console.log(typeof heros);


//stack(primitive) Heap(non primitive)

let myytname="ankur"
let anothername=myytname
anothername="krishna"

console.log(myytname);
console.log(anothername);

let userone={
    email:"user@google.com",
    upi:"user@sbi"
}

let usertwo=userone

usertwo.email="ankur@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

