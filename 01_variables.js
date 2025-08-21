const accountId = 14452
let accountEmail = "mishrakishan@gmail.com"
var accountPassword = "1233"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // not allowed

/*
Prefer not to use var
because of issuse in block scope and functional scope.
*/

accountEmail = "KM@gmail.com"
accountPassword = "6071"
accountCity = "Mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])