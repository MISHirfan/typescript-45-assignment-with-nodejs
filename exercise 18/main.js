var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making arrays of countries and print its original order
var countriestovisit = ["china,", "brazil", "argentina"];
console.log("original order:, countrietovisit");
//print the array in reverse order witout modifying the actual array list
console.log("alphabetical order:", __spreadArray([], countriestovisit, true).sort());
// show that te array is still in its original order
console.log("still in original order:", countriestovisit);
//print the array in reverse order without modifying ta actual array list
console.log("reverse order:", __spreadArray([], countriestovisit, true).reverse());
// show that te array is still in its original order
console.log("still in original order:", countriestovisit);
//we have changed the original array order now
console.log("original array reverse:", countriestovisit.reverse());
// print the array to show that its back to its original
console.log("back to original order:", countriestovisit.reverse());
// in the array to shown that its order has been changed in alphabetical name
console.log("sorted in alphabetical order:", countriestovisit.sort());
//we have changed again the original array order now in reverse order again
console.log("original array reverse:", countriestovisit.reverse());
