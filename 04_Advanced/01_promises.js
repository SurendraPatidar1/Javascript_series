// first promise
const promiseOne = new Promise(function(resolve,reject){
     // Do an Async task.
     // DB calls , cryptography , network
     setTimeout(() => {
        console.log('Async task is complete');
        // connecet resolve.
        resolve();
     }, 1000); 
});

// resolve ka connection hai .then ke saath / 
promiseOne.then(function(){
   console.log("Promise consumed");
})
 // Second Promise
new Promise(function(resolve,reject){
   setTimeout(() => {
      console.log("Async task 2");
      resolve();
   }, 1000);
}).then(function(){
   console.log("Async task 2 Resolved");
})

const promiseThree = new Promise(function(resolve,reject){
   setTimeout(() => {
    resolve({username:"Chai",email:"chai@example.com"});
   }, 2000);
})

promiseThree.then(function(user){
   console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
   setTimeout(() => {
      let error = false;
      if(!error)
      {
         resolve({username:"Surya" , password:"1234589"});
      }else{
         reject('Error : Something went wrong !');
      }
   }, 1000);
})

// promiseFour.then().catch();
promiseFour
.then((user) => {
   console.log(user);
   return user.username; 
}).then((username) => {
   console.log(username);
})
.catch((error) => {
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));

// promise five....

// const promiseFive = new Promise(function(resolve,reject){
//    setTimeout(() => {
//       let error = true;
//       if(!error)
//       {
//          resolve({username: "JavaScript" , password:"123"});
//       }
//       else{
//          reject('ERROR: JS went Wrong');
//       }
//    }, 1000);
// })

// async function consumePromiseFive(){
//    try{
//    const response = await promiseFive;
//    console.log(response);
//    }catch(error){
//       console.log(error);
//    }
// }

// consumePromiseFive();


// async function getAllUsers(){
//    try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       response.json();
//       const data = await response.json();
//       console.log(data);
//    } catch (error) {
//       console.log("Er:", error);
//    }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
   return response.json()
})
.then((data) => {
   console.log(data);
})
.catch((error) => console.log(error));
