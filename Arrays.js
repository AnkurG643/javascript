//array

const myArr=[0,1,2,3,4,5]

//console.log(myArr[0]);

const myHeros=["ironman","thor"]

const myArr2=new Array(1,2,3,4)
//console.log(myArr[1]);


//Array methods
myArr.push(6)
myArr.push(7)
//console.log(myArr);
myArr.pop()
//console.log(myArr);

myArr.unshift(9)
myArr.shift()

//console.log(myArr);

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));


//slice,splice

console.log("A ",myArr);

const myn1=myArr.slice(0,3)

console.log(myn1);
console.log("B ",myArr);


const myn2=myArr.splice(1,3)
console.log(myn2)