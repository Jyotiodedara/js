const user ={
    username: "khushi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); 
        console.log(this);  // this current bdhi j value pass kre
    }

}
user.welcomeMessage()// o/p khushi , welcome to website
user.username = "sam"
user.welcomeMessage()// o/p sam , welcome to website

console.log(this); // o/p {}

// Browser ni andr je gobal object che ene window object kevay

// now come into function
function hello(){
    let username = "khushi"
    console.log(this.username);// o/p undefined when this.username lkhe tyre
 }
hello()

//how to declare functions using arrow function

const hy = function(){
    let username = "khushi"
    console.log(this.username);
 }
hy()  //o/p undefined

const hy = () => {
    let username = "khushi"
    console.log(this.username)
 }
hy()// o/p undefined // when only use this it gives {} empty

//work on arrow function

const addTwo = (num1, num2) => {  // curly braces in andr lakhe toh return keyword lakhvu pde
  return num1 + num2
}
//implicit return krva
const addTwo = (num1, num2) => num1 + num2 //o/p 7
const addTwo = (num1, num2) => (num1 + num2)// ()paranthisis ma lakhe to return keyword ny lkhvu pde

// if you want to return object
const addTwo = (num1, num2) => ({username:  "Khushi"}) // o/p { username: 'Khushi' }

console.log(addTwo(3, 4)) // o/p 7

//in loops discuss later
//const myArray = [2,5,3,7,8]
//myArray.forEach()


