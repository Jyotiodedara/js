// In this video objects ne singleton ky rite kri skay athva ene constructor ni help thi ky rite declate kri skay
//const tinderUser = new Object(); // singleton object che
//console.log(tinderUser); //o/p {} empty object

const tinderUser = {} // extra che nd nonsingleton object che

tinderUser.id = "123abc"
tinderUser.name = "Khushi"
tinderUser.isLoggedIn = false

console.log(tinderUser); //o/p { id: '123abc', name: 'Khushi', isLoggedIn: false }

//object ni andr object
const regularUser = {
    email: "khushi@example.com",
    fullname: {
        userFullname: {
            firstName: "Khushi",
            lastName: "Odedara"
        } 
    }
}
console.log(regularUser.fullname.userFullname.firstName); //o/p Khushi
//regularUser.fullname lkhe to o/p { userFullname: { firstName: 'Khushi', lastName: 'Odedara' } }

//obect ne combine krva 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = Object.assign({},obj1, obj2, obj4) //assign=copy the values of all properties from one or more source objects to a target object. It returns the target object.

// spread mate
const obj3 = {...obj1, ...obj2, ...obj4} // spread=copy the values of all properties from one or more source objects to a target object. It returns the target object.
//console.log(obj3); //o/p { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// {} assign krva thi bdhu ena andr j run thy

//jyare database mathi value ave tyare

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 2,
        email: "k@gmail.com",
    },
    {
        id: 3,
        email: "j@gmail.com",
    }
]// array ni andr bau bdha object che ene loop through  krvu hoy kato value print krvu hoy toh

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));