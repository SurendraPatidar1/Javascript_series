/* there are two types of dataTypes in Javascript are :-
1. Primitive datatypes.
Primitive dataTypes in Javascript are :-
1.String.
2.Number.
3.Boolean.
4.Null.
5.Undefined.
6.Symbol.
7. BigInt

2. Non-Primitive datatypes. 
Non-Primitive (Reference) datatypes in Javascript are :-

Array/Objects/Functions.
*/

const score = 100;
const scoreValue = 100.4;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

const bigNumber = 1234588888898888n;

console.log(id === anotherId); // false;

const heros = ["Shaktiman" , "Balvir" , "Motu-patllu"];
let myObj = {
    name : "Surya",
    age : 20,
};
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); //boolean
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigint

console.log(typeof myFunction); // function (object function)
console.log(typeof heros);      // Object
console.log(typeof myObj);      // Object