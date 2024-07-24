
//Object Literals
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
console.log(user); // Whole object
console.log(user.email); //  surendrapatidar001@gmail.com 
console.log(user["email"]); // surendrapatidar001@gmail.com 
console.log(user["full name"]); //Surendra Patidar
console.log(typeof user.mySym);