// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(40)); // 40
// console.log(calculateCartPrice(100,400,500,8220)); // 100

// **************   ...num1 is REST Operator     *********************
// function calculateCartPrice(...num1){
//         return num1;
// }
// console.log(calculateCartPrice(100,400,500,8220)); // [ 100, 400, 500, 8220 ]

function calculateCartPrice(val1 , val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(100,400,500,8220)); // rest value are print [ 500, 8220 ]

//****************** how to handle the objects in functions */
const user = {
    username: "Pizza", 
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}
// handleObject(user);

//  ********************* Another way to handle the Object. ***********************
handleObject({
    username:"aryan",
    price : 399
})                         // username is aryan and the price is 399


// const myNewArray = [200,300,500,400];
function returnSecondValue(getArray){
    return getArray[2];
}
// console.log(returnSecondValue(myNewArray)); // 500
console.log(returnSecondValue([200,300,500,400])); // 500
