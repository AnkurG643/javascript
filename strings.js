const name="ankur"
const age=21
console.log(name+age+"value");

console.log((`hello my name is ${name} and my age is ${age}`));

const gamename=new String('ankur')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));


console.log(gamename.indexOf('u'));

const newString = gamename.substring(0,2)
console.log(newString);

const anotherstring=gamename.slice(-4,4)
console.log(anotherstring);

const newStringone="  ankur"
console.log(newStringone)
console.log(newStringone.trim());

const url="https://ankur.com/ankur%20goswami"
console.log(url.replace('%20','-'));
console.log(url.includes('ankur'));
console.log(url.includes('slg'));


const newname="a-nk-ur"
console.log(newname.split('-'));
