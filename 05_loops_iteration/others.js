//const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach ( (item) => {
//      console.log(item);
//      return item
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 )
// another way with arrow fun in {} we have to write return
//const newNums = myNums.filter( (num) => {
//    return num > 4 
// } )

console.log(newNums);// o/p [ 5, 6, 7, 8, 9, 10 ]

//using foreach

// const newNums = []
// myNums.forEach( (num) => {
//      if (num > 4){
//         newNums.push(num)
//      }
// })

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'History', publish: 1987, edition: 1996},
    {title: 'Book Seven', genre: 'Fiction', publish: 2011, edition: 2006},
];

let userBooks = books.filter( (bk) => bk.genre === 'History')
 userBooks = books.filter( (bk) => {return bk.publish >= 2000})
  userBooks = books.filter( (bk) => {return bk.publish >= 2000 && bk.genre === "Science"})

console.log(userBooks);
//o/p of history books
// [
//   { title: 'Book Three',genre: 'History',publish: 1999,edition: 2007},
//   { title: 'Book Six', genre: 'History', publish: 1987, edition: 1996 }
// ]

//o/p of 2000 publish
// [
//   {title: 'Book Five', genre: 'Science',publish: 2009,edition: 2014},
//   {title: 'Book Seven', genre: 'Fiction', publish: 2011,edition: 2006 }
// ]

