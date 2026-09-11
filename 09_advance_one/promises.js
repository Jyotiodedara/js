const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

// resolve connect with .then 
promiseOne.then(function(){
    console.log("Promise consumed");  
})
//o/p Async task is compelete
//    Promise consumed

new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Async task 2");
    resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// o/p Async task 2
// Async 2 resolved

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//o/p { username: 'chai', email: 'chai@example.com' }

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = true
    if (!error){
      resolve({username: "khushi", password: "123"})  
    }else{
        reject('ERROR: Something went wrong')
    }
    }, 1000)
})
//o/p ERROR: Something went wrong

// .then .catch syntax
promiseFour.then((user) => {
    console.log(user);
    return user.username  
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
//o/p The promise is either resolved or rejected

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = true
    if (!error){
      resolve({username: "javascript", password: "123"})  
    }else{
        reject('ERROR: JS went wrong')
    }
    }, 1000)
})

// try catch syntax 
async function consumePromiseFive(){
    try{    
       const response = await promiseFive
       console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()
// o/p ERROR: JS went wrong

// async await using try catch syntax
// async function getAllUsers(){
//     try{
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        const data =  await response.json()
//        console.log(data);
//     }catch (error){
//      console.log("E: ", error);
//     } 
// }

// getAllUsers()


// using .then .catch formate

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))