// define variable
var apple = "apple";
var uppercaseapple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "mango"];
//test for equality and ineqaulity with strings
console.log("is apple is eqaul to apple");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple");
console.log(apple != "apple");
// tests using lowercase function
console.log("\nis APPLE is eqaul to apple after converting to lowercase");
console.log(uppercaseapple.toLowerCase() == "apple");
console.log("\nis apple is not equal to apple after converting to lowercase");
console.log(uppercaseapple.toLowerCase() != "apple");
// numerical tests
console.log("\n is ten is equal to twenty");
console.log(ten == twenty);
console.log("\n is ten not equal to twenty");
console.log(ten != twenty);
console.log("\nis ten greater then zero");
console.log(ten > 0);
console.log("\ntwenty is less then 10");
console.log(twenty < 10);
console.log("\nis ten is greater then or equal to 5");
console.log(ten >= 5);
console.log("\n twenty is less then or equal to 10");
console.log(twenty <= 10);
// tests using "and & "or" operators
console.log("\n twenty is not eqaul to 10 and twenty is greter then 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 twenty is greater then 10");
console.log(twenty != 10 && twenty > 30);
// using || (or
console.log("\n 20 is greater then 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater then 50 or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// tests weather in items to include in array
console.log("\nis mango include in my fruits array");
console.log(fruits.includes("mango"));
console.log("\n is mango not include in my fruits array");
console.log(!fruits.includes("mango"));
