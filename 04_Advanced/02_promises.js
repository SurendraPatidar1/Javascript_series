/* What is Promises ?
JavaScript Promises are used to simplify managing multiple asynchronous operations,
 preventing callback hell and unmanageable code. They represent future values,
  associating handlers with eventual success or failure,
 resembling synchronous methods by postponing value delivery. */

/* ******************** Parameters  *******************

The promise constructor takes only one argument which is a callback function()
The callback function takes two arguments, resolve and reject
    * Perform operations inside the callback function and if everything went well then call resolve.
    * If desired operations do not go well then call reject. 
    
*/

/*
--->      A Promise has four states.

1.Fulfilled	            Action related to the promise succeeded
2.Rejected	            Action related to the promise failed
3.Pending	            Promise is still pending i.e. not fulfilled or rejected yet
4.Settled	            Promise has been fulfilled or rejected

*/

/*  Promise Consumers:
 Promises can be consumed by registering functions using .then and .catch methods.
 
 1. Promise then() Method.
 Promise method is invoked when a promise is either resolved or rejected. 
 It may also be defined as a carrier that takes data from promise and further executes it successfully.

 Syntax:
.then(function(result){
        //handle success
}, function(error){
        //handle error
})


2. Promise catch() Method
Promise catch() Method is invoked when a promise is either rejected or some error has occurred in execution.
 It is used as an Error Handler whenever at any step there is a chance of getting an error.

 Syntax:
.catch(function(error){
        //handle error
    })
*/
// ***********************************************************************************************************************
// Some Important aspect related to Promises ......

/*
Q1 ->  How do Promises work in JavaScript? 
 Promises use then() and catch() methods to handle asynchronous results, allowing chaining of operations.

Q2 -> What are the states of a Promise?
Promises have three states: pending (initial state), fulfilled (successful completion), and rejected (failure).

Q3 -> What is Promise chaining?
Promise chaining is the practice of sequentially executing asynchronous operations using multiple then() calls on a Promise.

Q4 -> Can Promises be canceled in JavaScript?
Promises cannot be canceled natively, but techniques like using an external flag or a custom implementation can simulate cancellation.
 */