// ********** For-of Loop *****************
// ************ arrays ke uper hum for-of loop use kr skte hai .

// const arr = [5,8,9,10,32];
// for (const i of arr) {
//     console.log(i);
// }

// const greeting = "Hello World!";
// for (const i of greeting) {
//    console.log(`Each Char is ${i}`);   
// }

//  *****************   Maps      ****************
/*
Map Data Structure: This is a built-in collection type in JavaScript that allows you
 to store key-value pairs where both the keys and the values can be of any type (objects, primitives, functions, etc.).
 It provides methods to manipulate, iterate over, and retrieve items based on keys.
*/

const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United States Of America");
map.set('Fr' , "France");
map.set('IN' , "India");

// All objects printed key and value both. ..
// console.log(map);
// for (const key of map) {
//     console.log(key);
// }

// only keys print 
// for (const [key] of map) {
//     console.log(key);
// }

// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }

// const myObj = {
//     game1 : "NFS",
//     game2 : "Spiderman"
// }

// for (const [key,value] of myObj) {
//     console.log(key , ':-'  ,value); //  myObj is not iterable(Error)
// }
 

// ************** For-in Loop ***************************
// ******* object ke liye hum for-in loop use krenge .
// const myObj = {
//     js : "javascript",
//     cpp: "C++",
//     rb :"Ruby",
//     swift: "Swift"
// }
// for (const key in myObj) {
//         console.log(`${key} Shortcut is for ${myObj[key]}`);
// }

// const programming = ["js","css","html","cpp","swift"];
// for (const key in programming) {
//     // console.log(key); // print key means array index value .
//     console.log(programming[key]); // print array values . so we can use for-in loop for array.
// }