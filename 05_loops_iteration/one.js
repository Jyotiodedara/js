// for loop 
// let index = 0; (variable declare thyu eni value 0)
//index < array.length; (condition check index ni je length che e ochi hovi joye array.length thi )
// index++ (index ni value increase kre)

// ** basic syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }


for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element)
} // o/p 1 to 10 


 for (let i = 0; i <= 10; i++) {
     const element = i;
     if (element == 5){ // o/p 0 1 2 3 4 5 is best number 5 6 7 8 9 10
     console.log("5 is best number");
     }
     console.log(element)
 } // o/p 1 to 10 

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop value: ${j} and inner loop ${i}`);       
    }
}

// print table from 1 to 10 
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
     console.log(i + "*" + j + " = " + i*j );   // table print thy 1*1 = 1 evu 10 sudhi      
    }
}

// this values are work on array we declare array 

let myArray = ["flash", "superman", "batman"]
console.log(myArray.length); // o/p 3 array ni length find krva j aa line use thse

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
} // o/p flash superman batman

// keywords
// break and continue

for (let index = 1; index <= 20; index++) {
    console.log(`value of i is ${index}`);
} // o/p value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// value of i is 5
// value of i is 6
// value of i is 7
// value of i is 8
// value of i is 9
// value of i is 10
// value of i is 11
// value of i is 12
// value of i is 13
// value of i is 14
// value of i is 15
// value of i is 16
// value of i is 17
// value of i is 18
// value of i is 19
// value of i is 20

// when 5 num detect we come out from the loop
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        break // 5 pchi nu print ny thy bcz of break
    }
    console.log(`value of i is ${index}`);
}
// o/p value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// Detected 5

//continue keyword
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}
// o/p 1 to 20 
