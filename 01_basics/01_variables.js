const accountId = 144553
let accountEmail = "khushi@google.com"
var accountPassword = "12345"
accountCity = "Ahemdabad"
let accountState;
/*it gives undefined value*/
// accountId = 2 //not allowed we can not change the value of const

accountEmail = "k@odedara.com"
accountPassword = "130318"
accountCity = "vapi"

console.log(accountId);

/*prefer not to use var
bacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])