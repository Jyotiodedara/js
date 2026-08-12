// for of loop
// this loops are work on array and objects
// ["", "", ""]
// [{}, {}, {}]
// syntax ma object mtlb k koni upr loop lgadvi che

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
} // 1 2 3 4 5

// for of loop using string
const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`) 
}

// Maps  
// map is object holds key-value pairs and remembers the original insertion order of the keys.Any value(both objects and primitive values)may be used as either a key or a value.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// IN :- India
// USA :- United States of America
// Fr :- France

const myObject = {
    'game1': 'GTA',
    'game2': 'Supermario'
}
