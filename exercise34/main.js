// creating a array
var pizza = ["chicken tikka", "malai cheese", "fajita"];
// using for-loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onepizza = pizza_1[_i];
    console.log("i like ".concat(onepizza, " pizza"));
}
// print a new message outside of the for-loop
console.log("pizza is love");
