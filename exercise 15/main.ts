let guestlist = ["mehwish","irfan","zouyal"];

let dontcome = guestlist[0];

console.log(dontcome, "nahi aa sakti");

guestlist.splice(0, 1, "amir");

guestlist.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me`));
