// define a function with a rest perameter that accept items arguments responding our sandwiches
function makeSandwich(...items: string[]){
console.log("\nMaking a sandwich with the following items:\n")

items.forEach(singleitem => console.log(singleitem));

console.log("\nNow enjoy sandwich");
}

// call the function 3 times with 3 different number of arguments
makeSandwich("chiken", "cheese", "mayo", "egg");

makeSandwich("bread", "butter");

