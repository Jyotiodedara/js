// Immediatelt Invoked Function Expressions (IIFE)
// global scope k pollution se problem hoti hai kaibar to woh global scope k variables or pollution ko htane k liye we use iife function.

//function chai(){
//    console.log(`DB CONNECTED`);
}
chai()   //o/p DB CONNECTED

// for direct way same as upperone wrap function with parentisis()

(function chai(){
    // chai che e named iife kevay
    console.log(`DB CONNECTED`);
 })();     //o/p DB CONNECTED 

//we use this function with arrow function // put ; on upper code
( () => {
    console.log(`DB CONNECTED TWO`);
} )(); // o/p DB CONNECTED TWO

//it needs a variable

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('khushi')  //o/p DB CONNECTED TWO khushi