const coding = ["js" , "ruby" , "java" , "python" , "cpp"];

// coding.forEach(function name(item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// using for-each loopo we print array index and array elements and also all exist elements.
// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName:"Js"
    },
    {
        languageName: "C++",
        languageFileName:"Cpp"
    },
    {
        languageName: "Python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})