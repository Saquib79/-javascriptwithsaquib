const accountId=124455
var accountPassword="12345"
let accountEmail="saquibchiksi@gmail.com"
accountCity="jaipur"
let accountState;

//accountId=2 (this is not allowed const value can not be change)

accountEmail="sadique@gmail.com"
accountPassword="7979"
accountCity="Kolkata"

console.log(accountEmail)

/* prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState]);