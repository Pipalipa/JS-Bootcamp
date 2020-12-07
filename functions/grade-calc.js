// students score, total possible score (15, 20)
// 15/20 -> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

// cal funcion ()
// print sting 

const grade_calc = function (score ,totalPossible) {
    const percentage = (score / totalPossible) * 100
    let letterGrade = ''

    // console.log(percentage)
    // (my code)
    // if (percentage >= 90) {
    //     return `${score}/${totalPossible} -> you got a C ${percentage}%!` 
    // } else if (percentage >=80 & percentage <= 89){
    //     return `${score}/${totalPossible} -> you got a B ${percentage}%!`
    // } else if (percentage >=70 & percentage <= 79){
    //     return `${score}/${totalPossible} -> you got a C ${percentage}%!`
    // } else if (percentage >=60 & percentage <= 69){
    //     return`${score}/${totalPossible} -> you got a D ${percentage}%!`
    // } else (percentage <= 59)    
    //     return`${score}/${totalPossible} -> you got a F ${percentage}%!`

    if (percentage >= 90) {
        letterGrade = 'A'
    } else if (percentage >= 80){
        letterGrade = 'B'
    } else if (percentage >= 70){
        letterGrade = 'C'
    } else if (percentage >= 60){
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `${score}/${totalPossible} -> you got a ${letterGrade} ${percentage}%!`
}

console.log(grade_calc(11, 20))

// let result = grade_calc = (19, 20)
// console.log(result)