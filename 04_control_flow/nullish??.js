
// Nullish Coalescing Operator (??) : null undefined
//value first j return thy

let val1;
//val1 = 5 ?? 10 //o/p 5
//val1 = null ?? 10 // o/p 10
//val1 = undefined ?? 15 // o/p 15
val1 = null ?? 10 ?? 15 // o/p 10

console.log(val1); 

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// o/p more than 80