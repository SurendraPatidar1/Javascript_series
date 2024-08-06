  /*
  IN simple Words :-
     JS asynchronous language h but uska default behaviour synchronous hota h.
     Us behavior ko hame forcefully bta kr async bnana pdta h. Sbse easy example h aapke settimeout or setinterval methods. Hope aur clear ho gya h ab.

   */
    
    //    ****** Default JavaScript ******
// JavaScript is a Synchronous Language .
// JavaScript is a Single Threaded Language.

// What is Execution Context ?
//In JavaScript, the execution context is a concept that refers to the environment within which JavaScript code is executed. 
//It defines what code has access to variables, functions, and objects at any given point in time. 
// Understanding execution contexts is crucial for grasping how JavaScript handles scope, closures, and the execution stack. 
// ************************************ Types of Execution Contexts ***************************************
// 1. Global Execution Context.
// 2. Function Execution Context.
// 3. Eval Execution Context.

// In JavaSCript Execute One Line Of code at a Time .
// Each Operation waits for the last one to complete before executing .

var globalVar = "global";

function outerFunction() {
    var outerVar = "outer";

    function innerFunction() {
        var innerVar = "inner";
        console.log(globalVar); // Accesses globalVar from the global execution context
        console.log(outerVar);  // Accesses outerVar from the outerFunction's execution context
        console.log(innerVar);  // Accesses innerVar from the innerFunction's execution context
    }

    innerFunction();
}

outerFunction();


// What is Blocking Code ?
// Block the flow of Program .
// Read file Synchronous.
//  Blocking code can lead to performance issues,
//  especially in environments like web browsers where it can make the user interface unresponsive.

// Synchronous Code.
// console.log("Start");
// // alert("This is a blocking operation");
// console.log("End"); // This line will only execute after the alert is dismissed.

// var request = new XMLHttpRequest();
// request.open('GET', false); // `false` makes the request synchronous
// request.send();
// console.log("This will wait until the request completes");

// What is Non-Blocking Code ?
//To avoid blocking code, JavaScript provides several mechanisms to handle asynchronous operations,
// allowing other code to execute while waiting for certain tasks to complete.

// Does Not block Execution 
// Read file Asynchronous.
console.log("Start");
setTimeout(function() {
    console.log("This is non-blocking");
}, 1000);
console.log("End"); // This will execute immediately after "Start"
