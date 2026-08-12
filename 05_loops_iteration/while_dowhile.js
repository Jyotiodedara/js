//while loop

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}
// value of index is 0
// value of index is 2
// value of index is 4
// value of index is 6
// value of index is 8
// value of index is 10

//if you want it with array

let myArray = ['flash', 'batman', 'superman']

let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1 // +1 k ++ same j thy
}
// value is flash
// value is batman
// value is superman

//**do while loop (pela kam thy do thi and last ma condition check thy)

let score = 1
do {
   console.log(`score is ${score}`); 
   score++
} while (score <=10);
// score is 1
// score is 2
// score is 3
// score is 4
// score is 5
// score is 6
// score is 7
// score is 8
// score is 9
// score is 10


let score = 11
do {
   console.log(`score is ${score}`); 
   score++
} while (score <= 10);
// score is 11 bcz first it work and than check condition