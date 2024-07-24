//In Javascript, Arrays are resizable and can contain a mix of different data types.

const myArr = [0,1,2,3,4,5];
// const arr = [0,1,2,3,true,"surya"];

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(arr); // [ 0, 1, 2, 3, true, 'surya' ]
// console.log(arr[3]); // 3(0-based indexing)

// const arr = ["Shaktiman" , "Bhim" , "Balvir"];
// console.log(arr); //[ 'Shaktiman', 'Bhim', 'Balvir' ]

//  *********************  ARRAY METHODS **************************

// myArr.push(8); 
// console.log(myArr); //[
//                    //     0, 1, 2, 3,
//                    //     4, 5, 8
//                    //   ]

// myArr.pop();
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

// myArr.unshift(1);  
// // console.log(myArr); //[ 1,0, 1, 2, 3, 4, 5 ]

// // UNSHIFT is take much time , if the number is big

// myArr.shift();
// // console.log(myArr);  [ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(8)); // false
// console.log(myArr.includes(4)); //true
// console.log(myArr.indexOf(4)); // 4

// const newArr = myArr.join();
// // console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// // console.log(newArr); // 0,1,2,3,4,5

// // JOIN change the type Number to String.

// // ***************  SLICE/SPLICE  *********************

// const mynum = myArr.slice(1,3);
// console.log("A" , myArr); // A [ 0, 1, 2, 3, 4, 5 ]
// console.log(mynum);       // [1 , 2]

// const mynum2 = myArr.splice(1,3);
// console.log("B" , myArr); // B [ 0, 4, 5 ]
// console.log(mynum);       // [1, 2]


// const marvel_heros = ["thor" , "Ironman" , "Spiderman"];
// const dc_heros = ["superman" , "flash" , "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);      // [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][2]);  // batman

// const all_heros = marvel_heros.concat(dc_heros); 
// console.log(all_heros); //    [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);  // [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


// const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_another_arr = another_arr.flat(Infinity);
// console.log(real_another_arr);     // [1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray("Surya")); //false
console.log(Array.from("Surya")); // [ 'S', 'u', 'r', 'y', 'a' ]
console.log(Array.from({name:"Surya"})); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); [100,200,300]