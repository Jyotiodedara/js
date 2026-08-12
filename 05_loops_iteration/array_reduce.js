const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator, currentvalue){
    console.log(`acc: ${accumulator} and currval: ${currentvalue}`);
    return accumulator + currentvalue
}, 0)

console.log(myTotal); // o/p 6
// o/p of 2nd console
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3

// now write using Arrow function
