// Create an array with 5 todos (list)
// You have x todos () where X is the lengh of the array)
// Print the fist and second to last items -> Todo: walk the dog 
// const todo = [ 'learn piano', 'learn node', 'paint', 'read', 'make diner']

// // Delete the 3rd item
// // Add a new item onto the end
// // Remove the first item from the list


// todo.splice(2, 1)

// console.log(`you have ${todo.length} todos!`)  
// todo.push('My new note')
// console.log(todo.shift())
// console.log(todo)
// // callback function
// todo.forEach(function (todo, index){
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })

// // console.log(`todo: ${todo[0]}`)
// // console.log(`todo: ${todo[todo.length -2]}`)


// // 1. The first item
// // 2. The second item
// // ...

// for (let count = 0; count < todo.length; count++){
//     console.log(`${count +1}.`, todo[count])
// }



// chalenge 
// 1. Convert Array to array of objects -> text, completed 
const todos = [{
    title: 'learn piano',
    completed: 'true'
}, {
    title: 'learn node',
    completed: 'false'
}, {
    title: 'paint',
    completed: 'true'
}, {
    title: 'read',
    completed: 'false'    
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed.toLowerCase () < b.completed.toLowerCase () || a.title.toLowerCase () < b.title.toLowerCase ()) {
            return -1
        } else if (b.completed.toLowerCase () < a.completed.toLowerCase || b.title.toLowerCase () < a.completed.toLowerCase ()) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)


// 2. Create function to remove a todo by texte value (ex remove buy food...)(serach with case insensitive) (nned to find the index, if is fond need to use the other methodes to remove)

// const deleteTodo = function (todos, todoTitle) {
//     const index = todos.findIndex(function (todo) {
//         return todo.title.toLowerCase() === todoTitle.toLowerCase() 
//     })

//     if (index < 0) {
//         todos.splice(index, 1)
//     }
// }

// const getThingstoDo = function (todos, query){
//     return todos.filter(function (todo, index) {
//         const isBodyMatch = todo.body.toLowerCase().includes(query.toLowerCase())
//         return isBodyMatch > 0 
//     })
// }






// console.log(getThingstoDo(todos, 'false'))

// {
//     
// }
// console.log(todo)








