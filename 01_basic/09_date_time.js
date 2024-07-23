let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(typeof mydate);  // object

// let myCreateDate = new Date(2023,0,23,5,3);
// let myCreateDate = new Date("2023,8,01"); // yy-mm-dd
// let myCreateDate = new Date("08-01-2003");   //mm-dd-yy
// console.log(myCreateDate.toLocaleString());
// let myCreatedDate = new Date("2023-8-1");
// let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()); // july-6
// console.log(newDate.getMonth() + 1); // july-7
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time is 9.45`);

console.log(newDate.toLocaleString('default' , {
    weekday: "long",
    timeZone: 'UTC'
}));