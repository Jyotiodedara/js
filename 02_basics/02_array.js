const marvel_heros = ["Iron Man", "Captain America", "Thor"]
const dc_heros = ["Batman", "Superman", "Wonder Woman"]

//marvel_heros.push(dc_heros)//push=add new element at the end of array
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]); //o/p Superman
// o/p ['Iron Man','Captain America','Thor', [ 'Batman', 'Superman', 'Wonder Woman' ]]

//push existing array maj add kri dey nd concat combine kri ne ape.
// concat=combine two or more arrays and return new array
const allHeros = marvel_heros.concat(dc_heros)// same o/p as push
console.log(allHeros);// o/p ['Iron Man','Captain America','Thor','Batman','Superman','Wonder Woman']

//*spread combine two or more arrays and return new array
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // o/p same as concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7,[4,5]]]// flat depth thi alg kre 

const real_another_array = another_array.flat(Infinity)//flat=return new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log(real_another_array); //o/p [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//when you do data screping

console.log(Array.isArray("Khushi")) //o/p false
//convert krva mate
console.log(Array.from("Khushi")) //o/p [ 'K', 'h', 'u', 's', 'h', 'i' ]
console.log(Array.from({name: "Khushi"}))// it return empty array o/p [] you have to specify always k keys nu array bnave k value na array bnave if na bnavi ske to empty j ape

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))//of=return new array instance with a variable number of arguments, regardless of number or type of the arguments.
// o/p [ 100, 200, 300 ]



