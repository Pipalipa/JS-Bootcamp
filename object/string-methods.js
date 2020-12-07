let name = ' Andrew Mead '

// lengh property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case

console.log(name.toLowerCase())

// Includes method
let password = 'abc123word098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

//  Challenge area

// isValidPAssword (accept 1 argument, the string password to validate and return true or false)

// only return true when lenght is more than 8 - and it doesn't contain the word password



let isValidPassword = function (motdepasse) {
    if (motdepasse.length >= 8 && !motdepasse.includes('password')) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('asdfc')) //false
console.log(isValidPassword('asdfc122333@##')) //valid
console.log(isValidPassword('asdfchdghdwehpassword')) //false