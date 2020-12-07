// Function - input (argument), code, output

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser ()

let square = function (num) {
    let result = num * num
    return result
}

let value = square (3)
let otherValue = square (10)

console.log(value)
console.log(otherValue)

// Chalenge

// convertFahrenheitToCelsius

// Call a couple of times (32 -> 0) (68 -> 20)

// Print the converted values

// let result = 0;
let fahrenheit_to_celsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32 ) * (5 / 9)
    return celsius
}

let celsiusOne = fahrenheit_to_celsius(32)
let celsiusTwo = fahrenheit_to_celsius(68)

console.log(`${celsiusOne} celsius`)
console.log(`${celsiusTwo} celsius`)

// let fahrenheit_to_kelvin = function (fahrenheit) {
//     let result = (fahrenheit + 459.67) * (5 / 9)
//     return result
// }

// const kelvins = fahrenheit_to_kelvin(32)
// console.log(`${kelvins} kelvin` )

