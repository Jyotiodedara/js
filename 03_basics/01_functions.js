function sayMyName(){
    console.log("K");
    console.log("H");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}

sayMyName()// normal sayMyName lakhe to e refrence kevay and sayMyName()lakhe toh e execution kevay 

//function addTwoNumbers(number1, number2){ //()bracket ma je value che ene parameters kevay 
//    console.log(number1 + number2);
//}

// practice mate diff way 
function addTwoNumbers(number1, number2){ 
    
   //let result = number1 + number2
   //console.log("Khushi");
   //return result // Result:  8
   return number1 + number2 // o/p 8
}

addTwoNumbers(3, 4)// o/p 7 // function ne call kre tyre je () ma hoy ene arguments kevay

// variable ni andr store krva mate
const result = addTwoNumbers(3, 5)// o/p 8
// result ni andr value su che e jova
//console.log("Result: ",result);// Result:  undefined

//make new function ena pchi if else
function loginUserMessage(username){ // username = "sam" ahiya pn value lakhi sky
    if(username === undefined){
        console.log("Please enter a username");
    }// o/p Please enter a username // if vadu khali vche test krva exrta che 
    //if(!username) lkhe mtlb ! sign true nu false kre ne false nu true
    return `${username} just logged in`
    }
// execute
//console.log(loginUserMessage("Khushi"))// o/p Khushi just logged in // ()empty bracket runkrave to undefined ave
//console.log(loginUserMessage())

//shopping cart
function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(2))// o/p 2
//console.log(calculateCartPrice(200, 400, 500, 2000, 3000))// aa vdhre value pass krva ... rest/spread use krvu
// [ 200, 400, 500 ] avu array ave hve ena pr loop lgadvu

//object
const user = {
    username: "Khushi",
    price: 199
}// how to convert object into function or use it

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user) // o/p Username is Khushi and price is 199

// to pass direct object write this code
handleObject({
    username: "sam",
    price: 399
})// o/p Username is sam and price is 199

//array pass krva
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray)); // o/p 400
//2nd way 
console.log(returnSecondValue([200, 400, 100, 1000]));// o/p 400 direct pass krva aa use krvu