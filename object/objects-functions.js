let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples History', 
    author: 'George Howard Zinn',
    pageCount: 723
}

let getSummary = function (book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}


// call the function that accept 1 only arg. 
let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log (bookSummary.pageCountSummary)

//  Chalenge area
//  Create function - take fahrenheit in - return object with all three temp. (basics temp.conversion file)

let fahrenheitGiven = 74

let celsius =  function (fahrenheit) {
    let result = (fahrenheit - 32 ) * (5 / 9)
    return result
    
}
let kelvin = function (fahrenheit) {
    return (fahrenheit + 459.67) * (5 / 9)
    
}

console.log (celsius(fahrenheitGiven))
console.log (kelvin(fahrenheitGiven))

let getSummaryTemp = function (fahrenheit) {
    return {
        celsiusSummary: `${fahrenheit} fahrenheit are ${celsius (fahrenheit)} celsius`,
        kelvinSummary: `${fahrenheit} fahrenheit are ${kelvin (fahrenheit)} kelvin`
    }
}

let tempgetSummaryTemp = getSummaryTemp (fahrenheitGiven)

console.log(`${tempgetSummaryTemp.celsiusSummary} and ${tempgetSummaryTemp.kelvinSummary}`)



let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32 ) * (5 / 9)
    }
}

let temps = convertFahrenheit(74)
console.log(temps)