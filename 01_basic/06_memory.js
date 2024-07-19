/* In primitive datatypes , they are stored in STACK memory (Stack  ke ander copy created hoti hai,
 yaha per changes copy created hokr hote hai)
In Non-primitive datatypes , they are stored in HEAP memory (Heap ke ander refrence create hota haii ,
 yaha per update original value ke ander hota hai)*/

let myYoutube = "Surendraptdr.com";
let anotherName = myYoutube;
anotherName = "chaiorcode";

console.log(myYoutube);
console.log(anotherName);

let userOne = {
    email : "user@email.com" ,
    upi : "6265955985@upi" ,
}

console.log(userOne);

let userTwo = userOne;
userTwo.email = "surya@google.com"
console.log(userOne.email);  // surya@google.com
console.log(userTwo.email);  // surya@google.com
