const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => num + 10 )
//const newNums = myNumbers.map( (num) => {return num + 10} ) // same but with return
//console.log(newNums);
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// Chaining Method

const newNums = myNumbers
.map((num) => num * 10 ) // multiply with 10
.map((num) => num + 1) // after that +1
.filter( (num) => num >= 40) // 40 thi upr vadi value pass thy
console.log(newNums);
 //[
//   11, 21, 31, 41,  51,
//   61, 71, 81, 91, 101
// ]
//filter o/p
// [
//   41, 51,  61, 71,
//   81, 91, 101
// ]
