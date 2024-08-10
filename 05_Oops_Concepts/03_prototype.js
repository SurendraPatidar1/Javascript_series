//  let myName = "Surya     ";
//  let myChannel = "Chai    ";

// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Surya = function(){
    console.log(`Surya is present in all Objects`);    
}
Array.prototype.heySurya = function(){
    console.log(`Surya says Hello`);
}
// heroPower.Surya();
// myHeros.Surya();
// myHeros.heySurya();
// heroPower.Surya();
// heroPower.heySurya(); //  TypeError: heroPower.heySurya is not a function

const User ={
    name: "Chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__= User;


// Modern Syntax...
Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername = "ChaiAurCode       ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength();
"surya".trueLength();
"blackTea".trueLength();