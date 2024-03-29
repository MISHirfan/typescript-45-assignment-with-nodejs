// creating a guestlist array
var guestlist = ["mehwish", "zouyal", "irfan"];
// making variable for those who cant come
var dontcome = guestlist[0];
//print the name of guest who cant come
console.log(dontcome, "nahi aa sakte hain");
// remove value from guestlist array
guestlist.splice(0, 1, "amii");
//message print a bigger table
console.log("good news ! we have found a bigger table for dinner");
// adding a new value at starting index array
guestlist.unshift("ali");
// adding a new value of ending index of array
guestlist.push("zain");
//adding a new guest at middle index array
var middleindex, number = Math.floor(guestlist.length / 2);
//adding a new guest middle index of array
guestlist.splice(middleindex, 0, "faizan");
//print message of updated list
console.log("updated list of our guest");
//sending a invitation message to our guest one bye one with there name
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
