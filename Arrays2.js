const marvel_heros=["thor","iron man","hawkeye"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log((marvel_heros));
//console.log(marvel_heros[3][1]);


//const heros=marvel_heros.concat(dc_heros)
//console.log((heros));


//const all_new_heroes=[...dc_heros,...marvel_heros]
//console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_AN_array=another_array.flat(Infinity);
//console.log(real_AN_array);


console.log(Array.isArray("ankur"))
console.log(Array.from("ankur"));
console.log(Array.from({name:"Ankur"}));


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
