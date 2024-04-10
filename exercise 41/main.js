//define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians names
var magicians_name = ["harry poter", "balaj", "faizan"];
//call the function to print each magicians name
show_magicians(magicians_name);
