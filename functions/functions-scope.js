// Global scope (convert fahrenheit_to_celsius, celsiusOne, celsiusTwo)
    // Local scope (fahrenheit, celsius)
        // Local scope (isFreezing)

let fahrenheit_to_celsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32 ) * (5 / 9)

    if (celsieus <= 0){
        let isFreezing = true
    }
    return celsius
}

let celsiusOne = fahrenheit_to_celsius(32)
let celsiusTwo = fahrenheit_to_celsius(68)

console.log(`${celsiusOne} celsius`)
console.log(`${celsiusTwo} celsius`)