let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))




// // 0 - 10
// console.log(randomNum)

// Challenge area
//  1 - 5 - true if correct - false if not correct



let makeGuess = function (guess) { 
    let min = 0
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min 
        if (randomNum >= 5) {
            return `you have enter ${randomNum}. True`
        } else {
            return `you have enter ${randomNum}. False`
        } 
    // if (Math.floor(Math.random() * (max - min + 1)) + min >= 5) {
    //     return true
    // } else {
    //     return false
    // } (the above code works to guive false / true, but I wanted to see the number generated)

  // 1 line equivalent bellow
//   return guess === randomNum
}
console.log(makeGuess(1))


