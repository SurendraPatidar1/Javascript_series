// const user = {
//     username: "Surya",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//        // console.log("Got User details from database");
//     //    console.log(`Username: ${this.username}`);
//     // console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// ************************* Constructor Function **************************

function user(username,loginCount,isLoggedIN){
    // variable and parameter
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN - isLoggedIN;

    // this.greetings = function(){
    //     console.log(`Welcome ${this.username}`);
    // }

    return this; // by default hota hee hai .
}

const userOne = new user("surya",12,true);
const userTwo = new user("SurendraPatidar",11,false);
console.log(userOne.constructor); 
// console.log(userTwo);
// *********** new Keyword...
// four steps followed by new keyword .
// new object create hota hai
// constructor function call hota hai new keyword ke kaaran
// this keyword ke ander arguments inject ho jaate hai .
// mil jaate hai function ke ander.
 

