// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

 let result = add(10, 1, 5)
 console.log(result)

//  Default arguments
let getScoreText = function(name = 'Anonymous',  score = 0) {
    return `I'm ${name}, and I score ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// Chalenge area
// A 25% tip(tippercent*100)on $40(value) woould be $10(cames from de calculation total * tipPercent)

// tipPercent = ((total * .25) / 100 )
// total = 100

let getTip = function (total, tipPercent = 20){
    let tip = total * (tipPercent / 100) 
    return `${tipPercent}% tip on ${total}$ would be ${tip}$`
}

 let result1 = getTip (699) 
 console.log (result1)



// let name = 'Fel'
// let age = 12
// console.log(`Hey, my name is ${name}!I am ${age} years old.`)