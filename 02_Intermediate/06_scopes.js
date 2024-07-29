// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
// *************** scope of a,b,c is only if loop ************
// if(true){
// let a = 10;
// const b = 20;
// var c = 30;
// }
// console.log(a); //a is not defined
//  console.log(b); // b is not defined.
//  console.log(c); // but its print 30 because of var so that's why we face this situation
 // block scope value is declared so we cannot access outside the loop.

 let a = 300;
 if(true){
    let a = 10;
    const b = 20;
    console.log("Inner Loop",a); // 10
    }
    console.log(a); //300

    for(let i=0; i<Array.length; i++)
    {
        const element = array[i];
    }