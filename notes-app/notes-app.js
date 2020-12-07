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

// localStorage.setItem('location', 'philadelfia') 

console.log(localStorage.getItem('location'))

localStorage.removeItem


const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
    event.target.textContent = 'The button was clicked'
})

// document.querySelector('#remove-all').addEventListener('click', function(){
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//     })
// })

document.querySelector('#search-text').addEventListener('input', function(event){
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

// Other examples

// p
// #replace
// .item

// --Multiple--
// p#order
// button.inventory
// h1#title.application
// h1.application#title

// 

// // DOM - Document Object Model

// // Query and remove
// // const p = document.querySelector('p') //find the 1st p paragraph tag
// // p.remove()

// // Query all and remove
// const ps = document.querySelectorAll('p') // find all paragraphs tags 

// ps.forEach(function (p) {
//     p.textContent = '****' //change the text content values from the DOM
//     // p.textContent(p.textContent) //read value from DOM
//     // p.remove()
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from javaScript'
// document.querySelector('body').appendChild(newParagraph)

document.querySelector('#filter-by').addEventListener('change', function(event){
    console.log(event.target.value)
})