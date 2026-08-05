//array 
//array are resizable and contain mix datatype(string,number,boolean)

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["Spiderman", "Superman"]
console.log(myHeros);

//another way to declare array
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]);// o/p 0 ave kemk index 0 aypu tu

//Array methods

myArr.push(6)//push=add new element at the end of array
myArr.push(7)
myArr.pop()//pop=remove last element or value from array 7 remove thy jase

myArr.unshift(9)//unshift=add new element at the start of array start ma 9 add thy jase
myArr.shift()//shift=remove first element or value from array 9 remove thy jase

console.log(myArr.includes(10));//includes=check if the value is present in array or not o/p false
console.log(myArr.indexOf(4));//indexOf=return the index of value o/p 4

const newArr = myArr.join()//join=convert array into string o/p 0,1,2,3,4,5,6

console.log(myArr); //[ 0, 1, 2, 3,4, 5, 6]o/p of push
console.log(newArr); //0,1,2,3,4,5,6 o/p of join bracket remove kri dey
console.log(typeof newArr); //string o/p of join

//slice=return the selected element from array
//splice=add or remove the element from array

console.log("A", myArr); //o/p A[ 0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 4)//slice=return the selected element from array 
console.log(myn1); //o/p [ 1, 2, 3]
//print the original array after slice
console.log("B", myArr); //o/p B[ 0, 1, 2, 3, 4, 5, 6] slice original array ma koi change nathi karyu

//splice original array ne manipulate kare che
const myn2 = myArr.splice(1,4)
console.log(myn2); //o/p [ 1, 2, 3, 4]
console.log("C", myArr); //o/p C[ 0, 5, 6] splice modifies the original array

//A original array B slice array C splice array