// creating a guestlist array
let guestlist = ["mehwish","zouyal","irfan"];

// making variable for those who cant come
let dontcome = guestlist[0];

//print the name of guest who cant come
console.log(dontcome, "nahi aa sakte hain");

// remove value from guestlist array
guestlist.splice(0, 1, "amii");

//message print a bigger table
console.log("good news ! we have found a bigger table for dinner");

// adding a new value at starting index array
guestlist.unshift("ali")

// adding a new value of ending index of array
guestlist.push("zain");

//adding a new guest at middle index array
let middleindex, number = Math.floor (guestlist.length / 2)

//adding a new guest middle index of array
guestlist.splice(middleindex, 0, "faizan");

//print message of updated list
console.log("updated list of our guest")

//sending a invitation message to our guest one bye one with there name
guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));

console.log("unfortunately, the new dinner table wont arrived on time so i can invite only two guest to dinner with me");

// using while loop to remove guest from the array until only two names remain
while(guestlist.length > 2){
    let removeguest = guestlist.pop();
    console.log(`sorry, ${removeguest} i cant invite you to dinner`)

}
console.log("invitation to the last 2 guest");
guestlist.forEach(lasttwo => console.log (`Luckly ${lasttwo}, you are still invited to dinner`));

guestlist.pop();
guestlist.pop();
console.log("empty list:, guestlist")