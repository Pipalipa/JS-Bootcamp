const todos = [{
    title: 'learn piano',
    completed: true
}, {
    title: 'learn node',
    completed: false
}, {
    title: 'paint',
    completed: true
}, {
    title: 'read',
    completed: false 
}]

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters){
    const filteredTodos = todos.filter(function (todo){
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (Todos) { 
        return !todos.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(todos => {
        const newparagraph1 = document.createElement('p')
        newparagraph1.textContent = todos.title
        document.querySelector('#todos').appendChild(newparagraph1)
        // if (todo.completed === false ) {
        //     document.querySelector('body').appendChild(newparagraph1)
        // }
    });
}

renderTodos(todos, filters)

// You have 2 todos left (put this message in a paragraph tag)

// Add a p for each todo aboven (use the text value of the object as the visible text  forb the paragraph)

//  Listen for new todo creation

// document.querySelector('#add-todo').addEventListener('click', function(event){
//     console.log ('Im adding a new todo...')
//  })

//  Listener for todo text change
// document.querySelector('#new-todo').addEventListener('input', function(event){
//     console.log(event.target.value)
// })


document.querySelector('#search-text').addEventListener('input', function (event){
    filters.searchText = event.target.value
    console.log(filters.searchText)
    renderTodos(todos, filters)
})


// 1. Create a form with a single input for tudu text single input for todo text
// 2. Setup an submit handler and cancel the defaut action
// 3. Add new item to the todos array with the text data (completed value of false) (add items to one array)
// 4. Rerender the application 
// 5. Clear the input fild value
