// const userEmail = "k@khushi.ai" // "" empty string hoy toh don't vadu output ave

// if (userEmail){
//     console.log("Got user email");
// }else {
//     console.log("Don't have user email"); 
// } //o/p Got user email 

 //Falsey Values

 // false, 0, -0, BigInt 0n, "", null, undefined, NaN

 //Truthy values

 // "0", "false", " ", [], {}, function(){} // empty function

// if (userEmail.length === 0){
//     console.log("Array is empty");
// } // o/p Array is empty

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
     console.log("Object is empty");
} // o/p Object is empty