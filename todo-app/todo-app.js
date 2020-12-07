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
    searchText: '',
    hideCompleted: false
}

console.log('SSS')

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = filters.hideCompleted === false || todo.completed === false

        return searchTextMatch && hideCompletedMatch
    }) 



    const incompleteTodos = filteredTodos.filter(function (todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''


    const summary = document.createElement('h2')
    summary.textContent = `You Have ${incompleteTodos.length} todos left` 
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function(todo) {
        const newParagraph = document.createElement('p')
        newParagraph.textContent = todo.title
        document.querySelector('#todos').appendChild(newParagraph)
    })
}

renderTodos(todos, filters)

// */ Listen for new todo creation
// document.querySelector('#Add-to-do').addEventListener('click' , function(event) {
//     console.log ('Im adding a new todo')
// })

//* Listen for todo change
// document.querySelector('#new-todo-text').addEventListener('input', function(event){
//     console.log(event.target.value)
// })


document.querySelector('#search-text').addEventListener('input', function(event){
    filters.searchText = event.target.value
    renderTodos(todos, filters)
})

//*     document.createElement('p')
// newParagraph.textContent = 'This is a new element from javaScript'
// document.querySelector('body').appendChild(newParagraph)

// 1. Create a form with a single input for todo text
// 2. Setup an submit handler and cancel the default action

document.querySelector('#new-input').addEventListener ('submit' , function(event){
    event.preventDefault()
    console.log ('>>', event.target.elements.todo.value)

    todos.push({
        title: event.target.elements.todo.value,   
        completed:false
    })
    renderTodos(todos, filters)
    event.target.elements.todo.value = ''
})

//     addTodo(event.target.elements.todo.value)
// 

// 3. Add a new item to the todos array with that text data (completed value of false)

// 4. Rerender the application
// const addTodo = (value) {
//     todos.push({
//         title: value,   
//         completed:false
//     })
//     renderTodos(todos, filters)

//     value = ''
// }
// 5. Clear the input field valuexs

// *Chalenge 2 
// 1. Create a checkbox and setup event listener -> "hide completed"
document.querySelector('#Hide-completed').addEventListener('change', function (event){
    filters.hideCompleted = event.target.checked 
    renderTodos(todos, filters)

    // let filteredTodos = todos
    // if (event.target.checked === true) {
    //         filteredTodos = todos.filter(function (todo) {
    //             return todo.completed === false
    //         })
    // }
    // renderTodos(filteredTodos, filters)
})
// 2. Create a new hideCompleted filter (default false)
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Setup renderTodos to remove completed items

