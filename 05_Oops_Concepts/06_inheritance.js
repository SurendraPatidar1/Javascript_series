class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai","chai@gpt.com","8520");
chai.addCourse();
const masalaChai = new User("masalaChai");
// masalaChai.addCourse(); // Not accesible
masalaChai.logMe();
chai.logMe();
console.log(chai instanceof User);

