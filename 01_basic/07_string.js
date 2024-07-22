// let surya = 'Patidar';
// let surendra = "patidar";

// console.log(surya);
// console.log(surendra);
// console.log(surya.length);
// console.log(surendra.length);

// let x = "my\ name\ is Joe";
// console.log(x);
// console.log(typeof x);

// let str = "Coding Ninjas";
// // console.log(typeof str);
// let str2 = "Coding Ninjas";
// console.log(str == str2);  /// True 

// let str3 = new String("Coding Ninjas");
// let str4 = new String("Coding Ninjas");
// console.log(str3 === str4); // false;
// console.log(str3 == str4);  //false

// let str5 = "Coding Ninjas";
// let str6 = new String("Coding Ninjas");
// console.log(str5 === str6); //false
// console.log(str5 == str6); //true

const name = "Surya";
const repoCount = 50;
console.log(name + repoCount + "Value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("surya-patidar-from-ganeshpur");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('H'));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim space ko remove kr deta hai to bhai iska use hum data store/input krne per kr skte hai.

const url = "https: surya.com/surendra%20patidar";
console.log(url.replace('%20','-'));
console.log(url.includes('surya')); // true
console.log(url.includes('Sundar')); // false


console.log(gameName.split('-'));