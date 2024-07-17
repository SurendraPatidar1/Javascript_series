const accountID = 6265955;
let accountEmail = "surendrapatidar001@gmail.com";
var accountPassword = "Jaipur";
//  accountID = 2; // accountID is not updateable because it declare const , we can n't change the constant declare variable. 
console.log(accountID);

accountEmail = "hc@hc.com"
accountPassword = "12345"
let accountCity = "Banglore"

/*
Prefer not to use VAR 
Because of issue in block scope and functional scope.

*/

console.log(accountID);

console.table([accountID,accountEmail,accountPassword,accountCity]);