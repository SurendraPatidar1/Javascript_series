// *********** Falsy/False Values ************
 //  false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN.

// ************* Truthy/true Values ***************
// "0" , 'false' , " " , [] , {} , function(){} .

const userEmail = [];

// if(userEmail)
// {
//     console.log("Got user Email");
// }
// else
// {
//     console.log("Don't have User Email");
// }

// how to check the array is empty or not .
// if(userEmail.length === 0)
// {
//     console.log("Array is empty");
// }

// how to check the object is empty or not .
// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("Object is empty");
// }

// if(false == 0)  //  true
// if(false == '') //  true
// if(0 == '')     //  true

// *********** Nullish Coalescing Operator (??) : null undefined.

// The nullish coalescing operator (??) is a feature in JavaScript used to provide a default value
//  when dealing with null or undefined. It returns the right-hand operand when the left-hand operand is null or undefined,
//   otherwise,
//  it returns the left-hand operand.

let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10 
val1 = undefined ?? 15; // 15 
val1 = null ?? 10 ?? 20 ; // 10

console.log(val1);

// the nullish coalescing operator is a more precise tool for providing default values 
// only when dealing with null or undefined.

// ************** Ternary Operator *********************
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

