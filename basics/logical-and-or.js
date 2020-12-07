let temp = 55

//  Logical And Operator - True if bouth sides are true. false otherwise.

// Logical Or Operator - True if at least one side is true. false otherwise. 

if (temp >= 60 && temp <= 90) {
console.log('Is is pretty nice out')
}
else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}


// Chalenge are

//  Are bouthe vegan? Only offer up vegan dishes
// At least one vegan? Make sure to offer some vegan option
//  Else, Offer up anything on the menu

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan ) {
    console.log('Only offer up vegan dishes')
} 
else if (isGuestOneVegan|| isGuestTwoVegan) {
    console.log('Make sure to offer some vegan option')
} else {
}
