var guestlist = ["mehwish", "irfan", "zouyal"];
var dontcome = guestlist[0];
console.log(dontcome, "nahi aa sakti");
guestlist.splice(0, 1, "amir");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me")); });
