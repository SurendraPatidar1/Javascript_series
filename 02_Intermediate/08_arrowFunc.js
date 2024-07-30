const user = {
    username: "Surya",
    price: 4500,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); // current context ya current value ki baat krta hai !
    }
}
// user.welcomeMessage(); // Surya , welcome to website
// user.username = "sam";
// user.welcomeMessage(); // sam , welcome to website
// console.log(this); //{}
// browser ke ander jo object hai wo hai window object 


// function chai(){
//     let username = "hitesh"
//     // console.log(this.username); // undefined
// }
// chai();


// const chai = function(){
//     let username = "Hitesh"
//     console.log(this.username);
// }
// chai(); // undefined..

// ************* Arrow FUnction **************

// const chai = () => {
//     let username = "Hitesh"
//     console.log(this);
// }
// chai(); // {}


// ************** Explicit return *************
// const addTwo = (num1,num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(3,4)); // 7

// ************** Implicit Return ********************
// const addTwo = (num1,num2) =>  num1 + num2;
// console.log(addTwo(4,3)); // 7

// const addTwo = (num1,num2) =>  (num1 + num2);
// console.log(addTwo(4,3)); // 7

// const addTwo = (num1 , num2) => ({username: "Hitesh"});
// console.log(addTwo(3,4)); // { username: 'Hitesh' }