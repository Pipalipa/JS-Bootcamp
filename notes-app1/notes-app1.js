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

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

   filteredNotes.forEach(function (note){
       const noteEl = document.createElement('p')
       noteEl.textContent = note.title
       document.querySelector('#notes').appendChild(noteEl)
   })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(event){
    event.target.textContent = 'The button was clicked'
})

// document.querySelector('#remove-all').addEventListener('click', function(){
//    document.querySelectorAll('.note').forEach(function(note){
//        note.remove()
//    })
// })

document.querySelector('#search-text').addEventListener('input', function(event){
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

// --Single--
// P
// #replace (ID of replace)
// .item (all elements that have a class of Item)

// -- Multiple -- (we can chain multiple things together)
// p#order (paragraph tag that as the id of order)
// button.inventory (all buttons with the class name of inventory )
// h1#title.application ( target the h1 that has then title of replace and the class od application )
// h1.application#title ( target the h1 that as the class of application and the ID of tit)

// MDM addeventlistener (documentation)
// arguments in [] are optional





// // DOM - Document Object Model

// // Query and remove
// // const p = document.querySelector('p')
// // remove just the 1st p tag // p.remove()

// // Query all and remove
// const ps = document.querySelectorAll('p')

// // ps.forEach(function(p){ 
// //     p.textContent = '******' // change all the p tags with the text (textContent)
// //     //print all p tags // console.log(p.textContent)
// //     //remove all p tags // p.remove()
// // })

// // Add a new element 
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)


document.querySelector('#name-form').addEventListener('submit', function (event){
    event.preventDefault()
    console.log (event.target.elements.firstName.value)
    event.target.elements.firstName.value = ''
})