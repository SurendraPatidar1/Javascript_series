// ******************* what is reduce ****************
/*
The reduce method in JavaScript is used to execute a reducer function on each element of an array,
 resulting in a single output value.
It's a powerful method for accumulating values from an array into a single value.
*/





const myNums = [1,2,3];
// const myTotal = myNums.reduce(function (acc, curr) {
//     console.log(`acc: ${acc} and currValue: ${curr}`); 
//     return acc + curr;
// },0) 
// console.log(myTotal); // 6

// const myTotal = myNums.reduce((acc,curr) => acc + curr , 0);
// console.log(myTotal); // 6

// const shoppingCart = [
//     {
//         itemName: "Js",
//         price: 2999
//     },
//     {
//         itemName: "Python",
//         price: 999
//     },
//     {
//         itemName: "Mobile-dev",
//         price: 4999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     }
// ]

// const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price  , 0);
// console.log(priceToPay);

// Example: Flattening an Array of Arrays.
const nestedArray = [[0, 1], [2, 3], [4, 5]];

const flatArray = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flatArray); // Output: [0, 1, 2, 3, 4, 5]

// Example: Counting Instances of Values in an Object.
// count the number of times each element appears in an array:

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue]) {
    accumulator[currentValue] = 1;
  } else {
    accumulator[currentValue]++;
  }
  return accumulator;
}, {});

console.log(count); 
// Output: { apple: 3, banana: 2, orange: 2 }

// Example: Grouping Objects by a Property
//use reduce to group objects by a property:.

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 22 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 23 },
  ];
  
  const groupedByName = people.reduce((accumulator, person) => {
    if (!accumulator[person.name]) {
      accumulator[person.name] = [];
    }
    accumulator[person.name].push(person);
    return accumulator;
  }, {});
  
  console.log(groupedByName);
  /*
  Output:
  {
    Alice: [
      { name: 'Alice', age: 21 },
      { name: 'Alice', age: 25 }
    ],
    Bob: [
      { name: 'Bob', age: 22 },
      { name: 'Bob', age: 23 }
    ]
  }
  */
  