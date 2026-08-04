const name = "Khushi"
const repoCount = 50

//console.log(name + repoCount + " Value");
//modern way to write syntax is here:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//string declare krva another way
const gameName = new String('khushi-ode')
// run krva=> gameName o/p String {'khushiode'}
//[[Prototype]]: String
//[[PrimitiveValue]]: "khushiode"
//string ek object che type jose string nu toh e key-value pair che 0: "k" 1: "h"

//key-value pair nu key access krva
console.log(gameName[0]);//o/p k
//prototype access 
console.log(gameName.__proto__);//demo che asli methods na anme niche che

//different method to access object
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));//character ky position pr che e jova mate charat
console.log(gameName.indexOf('u'));// letter or char ky position pr che e 

//store variable in substring
const newString = gameName.substring(0, 4)//o/p khus last value 4 include ny thay
console.log(newString);

const anotherString = gameName.slice(-8, 4) // 9 etle kemk length che string ni use negative to test
console.log(anotherString);//o/p hus

//trim method
const newStringOne = "   khushi    "
console.log(newStringOne);// it give space in o/p
console.log(newStringOne.trim());// it remove all unwanted spaces in o/p.

//replace method
const url = "https://google.com/google%20website"

console.log(url.replace('%20', '-')) //use for replace %20 with - in url

console.log(url.includes('google'))//o/p true =>find a keyword che k ny em
console.log(url.includes('hello'))//o/p false

//convert string to "array" name khushiode mathi khushi-ode kyru che 
console.log(gameName.split('-'));// spaces na base pr string ne split kray saprater space pn hoy ske but ahiya - che 
// o/p ['khushi', 'ode']array ma convert thyu