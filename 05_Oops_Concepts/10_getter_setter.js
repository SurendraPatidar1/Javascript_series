class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password}Surya`;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        return this._email = value;
    }
    set password(value){
        this._password = value;
    }
}
const surya = new User("Sur@surya.ai","abc");
console.log(surya.password);
console.log(surya.email);
