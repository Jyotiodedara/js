// if 

// const isUserLoggedIn = true
// const temprature = 41

// if(temprature < 50){
//     console.log("less than 50");
// } 
// console.log("temprature is greater than 50");
// //o/p less than 50
// //    temprature is greater than 50

// // else
// if(temprature === 41){
//     console.log("less than 50");
// } else {
//     console.log("temprature is greater than 50");
// }
// console.log("Executed") //o/p less than 50
// //                            Executed


// // aa bdhu thy jay pchi if else vadu krvanu last ma upr vado code
// if ( 2 == "2"){ // true or false
//     console.log("executed"); // o/p executed
// }

// if ( 2 != 3 ){ // true or false
//     console.log("executed"); // o/p executed
// }

// < , >, <=, >=, == , != (not equal to), === (type check kre)
// === is used for type checking

//scope related
// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// } // o/p User power: fly

//sorthand notation

// const balance = 1000
// if (balance > 500) console.log("test"); //o/p test

// if (balance < 500) {
//      console.log("less than");   
// } else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }
//  o/p less than 1200

const isUserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (isUserLoggedIn && debitCard){
    console.log("Allow to buy course");
}// o/p Allow to buy course

// pipe sign is used for check multiple conditions
if (LoggedInFromGoogle || LoggedInFromGoogle){
    console.log("User Logged in");
} // o/p User Logged in