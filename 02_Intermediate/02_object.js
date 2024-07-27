
// *************       Object Literals      ****************
const mySym = Symbol("mykey");
const user = {
    name: "Surya",
    "full name" : "Surendra Patidar",
    [mySym] : "mykey",
    age : 20 ,
    location: "Bhopal",
    email:"surendrapatidar001@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday" , "Tuesday"]
}
// console.log(user); // Whole object
// console.log(user.email); //  surendrapatidar001@gmail.com 
// console.log(user["email"]); // surendrapatidar001@gmail.com 
// console.log(user["full name"]); //Surendra Patidar
// console.log(user[mySym]); // it is used for access the Symbol object.


user.email = "surya@chatgpt.com";
// Object.freeze(user); // if for ex. user email is freeze so we don't change in future.
user.email = "dev@ai.com"; // the value will not change because we use freeze object for freeze the object or not change further
console.log(user);

user.greeting = function(){
    console.log("Hello JavaScript Learners");
}
user.greetingTwo = function(){
    console.log(`Hello JavaScript Learners,${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());