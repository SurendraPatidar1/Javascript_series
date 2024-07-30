// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
// *************** scope of a,b,c is only if loop ************
// if(true){
// let a = 10;
// const b = 20;
// var c = 30;
// }
// console.log(a); //a is not defined
//  console.log(b); // b is not defined.
//  console.log(c); // but its print 30 because of var so that's why we face this situation
 // block scope value is declared so we cannot access outside the loop.

//  let a = 300;
//  if(true){
//     let a = 10;
//     const b = 20;
//     console.log("Inner Loop",a); // 10
//     }
//     console.log(a); //300

//     for(let i=0; i<Array.length; i++)
//     {
//         const element = array[i];
//     }


// ******************************************************************************************************************************//
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); // give error because we are accessing outside the local scope.

    two(); // hitesh
}
// one();

if(true){
    const username = "surya"
    
    if(username === "surya")
    {
        const website = " Youtube"
        // console.log(username + website); // surya Youtube
    }
}
// **************************** INTERESTING **************************************

console.log(addOne(5)); // 6
function addOne(num){
    return num + 1;
}
// addOne(5);

// console.log(addTwo(5)); //  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}
// addTwo(5);