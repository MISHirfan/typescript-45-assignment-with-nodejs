// define the function to show magician names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magician great through .map() it will modify array
function make_great(magician: string[]){
    return magician.map(name => `the great ${name}`);
}


// define an array of magician names
let magician_name = ["harry poter", "arshman"];

// call make great function to modify magician names
let great_magician = make_great(magician_name);

// call show_magician that show modify list of magician
show_magicians(great_magician)