// forin loop using object

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   // console.log(myObject[key]);
  // 2nd way  console.log(`${key} shortcut is for ${myObject[key]}`);
}
// javascript
// c++
// ruby
// swift by apple
//2nd o/p
// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

//forin loop using array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);   
}
// js
// rb
// py
// java
// cpp

//use map with forin loop we can not do iteration on map 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }// o/p nothing

// objects ni andr forin
//arrays ni andr forof
