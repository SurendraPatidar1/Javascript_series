const coding = ["js" , "ruby" , "java" , "python" , "cpp"];

// for-each return nhi krta hai value .
// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })
// console.log(values);

// ***************** Filter *******************
const num = [1,2,3,4,5,6,7,8,9,10];

// const newNums = num.filter( (num) => num > 5);
// console.log(newNums);

// const newNums =  num.filter( (num) => 
//     {
//         return num > 4
//     })
// console.log(newNums);

// *********************** How to do using for-each rather than filter.  *************
// const newNums = [];
// num.forEach( (num) => {
//     if(num > 5)
//     {
//         newNums.push(num);
//     }
// } )
// console.log(newNums); 

const books = [
    { title: 'Book One' , genre: 'Fiction' , publish: 1981 , edition: 2004},
    { title: 'Book Two' , genre: 'Non-Fiction' , publish: 1992 , edition: 2008},
    { title: 'Book Three' , genre: 'History' , publish: 1999 , edition: 2007},
    { title: 'Book Four' , genre: 'Non-Fiction' , publish: 1989 , edition: 2010},
    { title: 'Book Five' , genre: 'Science' , publish: 2009 , edition: 2014},
    { title: 'Book Six' , genre: 'Fiction' , publish: 1987 , edition: 2010},
    { title: 'Book Seven' , genre: 'History' , publish: 1981 , edition: 1994},
    { title: 'Book Eight' , genre: 'History' , publish: 2011 , edition: 2016}
];

let userBooks = books.filter( (item) => item.genre === 'History');

userBooks = books.filter( (item) => {
    return item.publish >= 2000 && item.genre === "Science"
});
console.log(userBooks);