// function User(email, password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase();
//         },
//         set: function(value){
//             this._email = value;
//         }
//     })
//     Object.defineProperty(this,'password',{
//         get: function(){
//             return this._password.toUpperCase();
//         },
//         set: function(value){
//             this._password = value;
//         }
//     })
// }
// const chai = new User("chai@chai.com","chai");
// console.log(chai.email);

/// This syntax is rarely used but in past time it is used so don't get confused..
const User = {
    _email: 'Sur@s.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },
    
    set email(value){
         this._email = value;
    }
}
const tea = Object.create(User);
console.log(tea.email);
