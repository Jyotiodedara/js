//scope na keyword let var and const
//let a = 10
//const b = 20
//var c = 30

//var c = 300
let a = 300
// if ni andr je lakhe e block scope kevay, eni bar je lakhy ene global scope kevay
// {} curly braces ne scope kevay
if (true){
    let a = 10
    const b = 20
    //var c = 30
    console.log("INNER: ", a); // o/p INNER:  10 niche 300
}//o/p 30 // ana pchi upr var c vadu krvanu

//for loop mate last ma che sikhvanu aa
for (let i = 0; i < array.length; i++){
    const element = array[i];
}

console.log(a); // o/p a = 300 ave // global scope ni value count thy
//console.log(b);
//console.log(c);// o/p 10 20 30


//Nested scope 
function one(){
    const username = "khushi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()// o/p khushi kemk two ni andr username kyru etle

} 
one()
//nested function jyare thy tyare child function hoy e parent na variable ne pn access kri ske.

//in if else
if (true) {
    const username = "khushi"
    if (username === "khushi"){
        const website = " youtube"
        console.log(username + website);
    }
}    // o/p khushi youtube

// +++++++++++++++++ Example ++++++++++++
console.log(addone(5)) // o/p 6 ave 

function  addone(num){
       return num + 1     
}

addTwo(5)// upr khali declare kyru etle thy gyu but ahiya declare krva sthe variable ma hold pn krelu che etle ky ny ave etle ene keay hoisting
// hoisting mtlb function ky rite declare thy kya ene rakhi skay su enu syntax che js variable ne treat kre  
const addTwo = function(num){
    return num + 2
}

