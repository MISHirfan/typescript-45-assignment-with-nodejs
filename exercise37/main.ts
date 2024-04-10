// making a function
function make_shirt(size: string = "large", printmessage: string = "i love typescript"){
    console.log(`creating a ${size} shirt with the ${printmessage} print on shirt`);
}

// calling the function with by default values
make_shirt();

// calling a function now with medium size and default message
make_shirt("medium")

// calling a function now with small size and also different print message
make_shirt("small")