// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encrptyPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai","chai@gpt.com","123"); 
// console.log(chai.encrptyPassword());
// console.log(chai.changeUsername());

// Behind the seen ... 
function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encrptyPassword = function(){
    return `${this.password}xyz`
}
User.prototype.changeUsername = function(){
    return `${this.username.toLowerCase()}`
}
const tea = new User("tea","tea@gmail.com","45689");

console.log(tea.encrptyPassword());
console.log(tea.changeUsername());