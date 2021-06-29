let todos = fetchTodos()

const filteredTodos = {
    id: '',
    text: '',
    completed: false
}

searchTodos(todos, filteredTodos)

//Search Todos
document.querySelector('input#search-todo').addEventListener('input', (e) => {
    filteredTodos.text = e.target.value
    searchTodos(todos, filteredTodos)
})

// Filter completed Todos
document.querySelector('#checkbox').addEventListener('change', (e) => {
    filteredTodos.completed = e.target.checked;
    searchTodos(todos, filteredTodos)
})


//CREATE NEW TODO
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    newTodo(todos, e)
    saveTodos(todos)
    searchTodos(todos, filteredTodos)
})