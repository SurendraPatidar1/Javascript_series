class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `156`;
    }
}
const surya = new User("Surya");
// console.log(surya.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone","i@phone.com");
iphone.logMe();
iphone.createId();