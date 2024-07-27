// **********  Singleton  ***********
const tinderUser = new Object(); // Singleton Object
// const tinderUser = {};  // Non-Singleeton object..
// console.log(tinderUser); // empty object
tinderUser.id = "134bac";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 
const regularUser = {
    email:"surya@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Surya",
            lastname:"Patidar"
        }
    }
}
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

//****************   Object decalre in Key-Value Pair       ****************** */
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj4 = {5:"a",6:"b"};

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

const obj3 = {...obj1, ...obj2}; // spread operator  
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// database se value is tarah aati hai .
const users = [
    {
    id: 1 ,
    email: "S@gpt.com"
},
{
    id: 1 ,
    email: "S@gpt.com"
},
    {
    id: 1 ,
    email: "S@gpt.com"
    },
]

users[1].email // first value access krni hai.
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('isLogged')); // false
