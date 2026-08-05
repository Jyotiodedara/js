// there are 2 ways to declare object
//1. object literal
//2. object constructor

//singleton = koi pan object ne ekaj var declare karva mate use thay che
//jyare apde actually ma litrals ni jem declare kriye toh singleton nay bane.constructor thi bnse to ha hamesha bnse

//**Object.create()// another way to create object or aane j kevay constructor method through ane ani andr j singalton object bne.

//object literals
//object declare kri ne ema value add karva mate

//declare symbol
const mySym = Symbol("key1") // Q-symbol lyo nd object ni key ma add kri ne apo


const JsUser = {
    name: "Khushi",
    "full name": "Khushi Odedara",// key "" ma hoy to log ma pn "" maj run krvanu.
    [mySym]: "mykey1", //symbol ne [] maj use krvanu 
    age: 20,
    location: "India",
    email : "khushi@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]
}

//how to access object
console.log(JsUser.email) //o/p khushi@example.com
//another way:
console.log(JsUser["email"]) //o/p khushi@example.com
// dot ni rite kre to string na rite levani jrur nthi pn jo [] ma ley toh "" string use krvu
console.log(JsUser["full name"]) //o/p Khushi Odedara
console.log(JsUser[mySym]) // o/p mykey1

// object key-value ne access ky rite kre  => dot notation
// values ne ky rite change kri skay
JsUser.email = "khushi@chatgpt.com"

// value ne lock krva mate freeze method use thay che
Object.freeze(JsUser) //freeze=lock the object so that no changes can be made to it
JsUser.email = "khushi@yt.com"
console.log(JsUser);// yt vadu change ny thy bcz we use freeze.

//Add function
JsUser.greeting = function() {
    console.log("Hello Js User");
}

//another function hve je name che object ni andr ene refrence krva mate string ne convert krvanu
// `` back text ma ene kevay string interpolation
JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);// direct name ne refer kre 
}

console.log(JsUser.greeting()); //o/p Hello JsUser
console.log(JsUser.greetingTwo()); //o/p Hello JsUser, Khushi

