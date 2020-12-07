const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work out',
    body: 'Exercise. eating a bit better.'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase () < b.title.toLowerCase ()) {
            return -1
        } else if (b.title.toLowerCase () < a.title.toLowerCase ()){
            return 1
        } else
            return 0
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase === noteTitle.toLowerCase
    })
} 

const findNotes = function (notes, query){
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch 
    })
}


// console.log(findNotes(notes, 'eating'))


// // const findNote = function (notes, noteTitle) {
// //     const index = notes.findIndex(function (note, index) {
// //         return note.title.toLowerCase === noteTitle.toLowerCase
// //     })
// //     return notes[index]
// // } 

// const note = findNote(notes, 'office modifications')
// console.log(note)


// ...Manipulate the array from the end of the array
// removes the last item from the array notes.pop(), onsole.log(notes.pop()) - removes the item and show the removed item back as return value console log or in a variable
// console.log(notes.pop())

// add one item to the end of the list
// notes.push('My new note')


// ... manipulatin the array from the start
// console.log(notes.shift()) - removes the 1st item from the array
// notes.unshift('My first note') - add one item to the buginning 


// ...manipulate from the middle of the array
// notes.splice(1, 1, 'This is the new second item') - add elements / or replace when (1(index from where to srart), 0(what to delete index), something(what we want to add))

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index){
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habbits to work out'
// })

// console.log(index)


// Explore that an object is only equal to the exact same object. Does not matter that it has the same property, it will return false. Only return true if is exactly the same thing.
// let someObject = {}
// let otherObject = someObject
// console.log(someObject  === otherObject)


// return false, even that we put {} in our array, bt is not the exact same thing so is -1 or false
// console.log('**', notes.indexOf({}))

// // Counting back
// for (let count = 2; count <=0 ; count--) {
//     console.log(count)
// }

// for (let count = notes.length - 1 ; count >= 0 ; count--) {
//    console.log(notes[count])
// }


sortNotes(notes)
console.log(notes)