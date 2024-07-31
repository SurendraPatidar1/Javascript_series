// for loop 
// let array = [10,20,30,40,50,60];
// for (let index = 0; index < 10; index++) {
//     const element = index;

//     console.log(element);
// }

// let index;
// for (index = 0; index < 8; index++) {
//     if(index == 5)
//     {
//         console.log("5 is best number");
//     }
// }
// console.log(index);

// **************** Table print 1 to 10 ******************
// for(let i=1; i<=10; i++){
//     console.log(`Outer loop value :${i}`);
//     for (let j = 1; j <=10; j++) {
//    // console.log(`Inner loop value :${j} and inner loop ${i}`);
//    console.log(i + '*' + j + ' = ' + i*j);
//     }
// }

// *************** myArray.length means pura chlega  ***************
// let myArray = ["flash" , "batman" , "superman"];
// for(let i=0; i < myArray.length; i++)
// {
//     const element = myArray[i];
//     console.log(element);
// }


// ************   break and continue    ************


// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

// ************ Continue ****************** ek galti maaf  .........
for (let index = 1; index <= 10; index++) {
    if(index == 5){
    console.log(`Detect 5`);
    continue;
    }
    console.log(`Value of i is ${index}`);
}