// define a function with a rest perameter that accept items arguments responding our sandwiches
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:\n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow enjoy sandwich");
}
// call the function 3 times with 3 different number of arguments
makeSandwich("chiken", "cheese", "mayo", "egg");
makeSandwich("bread", "butter");
