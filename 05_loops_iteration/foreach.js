const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {
    console.log(val);
} ) //o/p js ruby java python cpp

// using arrow function
coding.forEach( (item) => {
    console.log(item);
} ) // same output as upper

// using function
function printMe(item){
    console.log(item);
}
coding.forEach(printMe) // same output

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// using Array inside object

const myCoding = [
    {
       languageName: "javascript",
       languageFilename: "js"
    },
    {
       languageName: "java",
       languageFilename: "java"
    },
    {
       languageName: "python",
       languageFilename: "py"
    },
]

myCoding.forEach( (item) => {
      console.log(item.languageName);
})// o/p javascript java python



