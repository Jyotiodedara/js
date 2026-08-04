const score = 400
console.log(score);// o/p 400

const balance = new Number(100)
console.log(balance); //o/p [Number: 100]

//diff types of values to declare number 
console.log(balance.toString()); // o/p 100
console.log(balance.toString().length); //o/p 3
console.log(balance.toFixed(2));// value 2 ape to 100.00 nd 1 ape toh 100.0

const otherNumber = 23.8966 // 123.8966 lagade to o/p 124 ave
console.log(otherNumber.toPrecision(3));// 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// indian value o/p 10,00,000

//*************** maths ****************
console.log(Math);
console.log(Math.abs(-4));// absolute value when we have minus value positive thy jay
console.log(Math.round(4.9));// 4.3or 4.9 nu 5 nu roundof nearest number kri ne ape
console.log(Math.ceil(4.2));// upper vadi value ceiling mtlb jrak pn 4.2 thi vdhre hoy toh 5 j kri dey 
console.log(Math.floor(4.9));// lower ky pn ley 4.9 thy to pn value 4 j ley
console.log(Math.min(4,3,6,8));// minimum value o/p=3
console.log(Math.max(4,3,6,8));//maximum value o/p= 8

console.log(Math.random()); // random ni value hmesha 0 k 1 ni vche j ave 0 pn hoy athva 1 pn
console.log(Math.random()*10 + 1); //value 5.4556561 game e num ave but 0 point thi 1 number agad ave value ne left ma shift kre
console.log(Math.floor(Math.random()*10) + 1);// 0.1 hoy to math.floor 0 api dey e case ne avoid krva +1 add kyru kemk enu je min case che e value je joye e 1 thi toh upr j joye nd agad to game etlu hoy ske to e je value apse e 1 thi lay ne 9 ni vche apse

//value 10 thi 20 ni vche joye
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)// +1 e 0 na case ne avoid krva