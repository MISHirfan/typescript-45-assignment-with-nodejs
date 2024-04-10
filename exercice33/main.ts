// array of current users
let current_user = ["arshman","zoyal","zunaisha","anaisha",]

// aray of new users
let new_users = ["mehwish","khurram","faizan","balaj"]

// loop through new users to check for usernames avaibility

new_users.forEach(newt_one_user =>{

    let our_condition = current_user.some(current_one_users => 'current_one_user'.toLowerCase() === newt_one_user.toLowerCase())

        if(our_condition){
            console.log(`sorry ${newt_one_user} is already taken!`)
 
    }else{
        console.log(`this username ${newt_one_user} is available`)

    }
})