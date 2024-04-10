// array of current users
var current_user = ["arshman", "zoyal", "zunaisha", "anaisha",];
// aray of new users
var new_users = ["mehwish", "khurram", "faizan", "balaj"];
// loop through new users to check for usernames avaibility
new_users.forEach(function (newt_one_user) {
    var our_condition = current_user.some(function (current_one_users) { return 'current_one_user'.toLowerCase() === newt_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(newt_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(newt_one_user, " is available"));
    }
});
