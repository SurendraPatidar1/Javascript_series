// funtion keyword , function name , function syntax

function sayMyName(){
console.log("S");
console.log("U");
console.log("R");
console.log("Y");
console.log("A");
};
 // function refrence.
// sayMyName();
//number1 and number2 are parameters
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

// 3,"4" or 3,4 or 3,null they all are arguments of function.
// addTwoNumbers(3,"4"); // 34
// addTwoNumbers(3,4);   // 7
// addTwoNumbers(3,null); //3

// function addTwoNumbers(number1 , number2){
//     // let result = number1 + number2;
//     // return result;
//     return number1 + number2;
// }
// const result =  addTwoNumbers(8,5);
// console.log("Result:",result); 

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return; // after print out of function.
//     }
//     return `${username} just logged in`;
// }
function loginUserMessage(username = "sammy"){
    if(!username){
        console.log("Please enter a username");
        return; // after print out of function.
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage()); // undefined just logged in
console.log(loginUserMessage("surya"));
