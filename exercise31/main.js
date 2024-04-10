var username = ["mahad", "zeeshan", "admin", "usman",];
if (username.length === 0) {
    console.log("your array in empty we need to find some users!");
}
else {
    username.forEach(function (oneuser) {
        if (oneuser === "alishba") {
            console.log("hello $(oneuser), would you like to see a status reports");
        }
        else {
            console.log("hello ".concat(oneuser, ", thank youfor loging in again."));
        }
    });
}
