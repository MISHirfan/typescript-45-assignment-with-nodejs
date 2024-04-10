// define the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "the great ".concat(name); });
}
// define an array of magician names
var magician_name = ["harry poter", "arshman"];
var great_magician = make_great(magician_name);
console.log(great_magician);
