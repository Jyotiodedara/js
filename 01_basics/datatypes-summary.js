// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
//const score:number = 100(typescript)
const scoreValue = 100.3

const isLoggedInc = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 34567891245621n


// Refrence(Non Primitive)

//Array, Objects, Functions

const heros = ["Shaktiman", "spider-man", "thor"]//Array
let myObj = { // curly braces in andr object. object key-value pair ma lakhy
    name: "khushi",
    age: 22,
}
//declare function with variable
const myFunction = function(){
    console.log("hello world!"); 
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

// Memories types:

//1.stack(Primitive) when you declare variable you get a copy, 2.Heap (Non-Primitive) when any memory define under heap or any object it return refrence of original value

let myYoutubename = "Khusidotcom"

let anothername = myYoutubename
anothername = "jyoticom"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "khushi@google.com"

console.log(userOne.email);
console.log(userTwo.email);




