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

// making a copy of original array through . slice() function
let copy_magician_names = magician_name.slice()

// modify the copy array to include " the great with thier names"
let copy_great_magician = make_great(copy_magician_names);

// show both arrays original and copied

// original
console.log("original array\n")
show_magicians(magician_name);

// copied
console.log("\ncopied array\n");
show_magicians(copy_great_magician);