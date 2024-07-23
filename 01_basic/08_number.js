   //  ******   Math And Number Concept  ******

const score = 100;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2)); // 1000.00

const num = 250.4899;
console.log(num.toPrecision(4)); // 250.5

const hundred = 100000;
console.log(hundred.toLocaleString('en-IN'));

let x = 250050.8990;
console.log(Math.abs(x)); //250050.899
console.log(Math.round(x)); //250021

console.log(Math.floor(4.9)); //4
console.log(Math.ceil(4.9)); //5
console.log(Math.sqrt(256)); //16
console.log(Math.min(4,3,8,9,10,15)); //3
console.log(Math.max(2,5,6,8,9,32));  //32

console.log(Math.random()); // random values between 0 to 1
console.log(Math.floor(Math.random()*10)+1);  // Random values above 1 and less than 9

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random value between 10 to 20.