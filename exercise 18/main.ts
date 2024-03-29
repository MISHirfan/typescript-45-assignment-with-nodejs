// making arrays of countries and print its original order
let countriestovisit: string[] = ["china,","brazil", "argentina"];
console.log("original order:, countrietovisit");

//print the array in reverse order witout modifying the actual array list
console.log("alphabetical order:", [...countriestovisit].sort());

// show that te array is still in its original order
console.log("still in original order:", countriestovisit);

//print the array in reverse order without modifying ta actual array list
console.log("reverse order:", [...countriestovisit].reverse());


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