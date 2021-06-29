//Fetch todos from localStorage
const fetchTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}



//Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}




//Make new Todo 
const newTodo = (todos, e) => {
    const newTodo = {
        text: '',
        completed: false
    }

    e.preventDefault()

    res = e.target.elements.newTodo.value;
    newTodo.text = res;
    todos.push(newTodo)
    e.target.elements.newTodo.value = ''
}




//Search Todos
const searchTodos = (todos, filteredTodos) => {

    let searchedTodo = todos.filter(todo => {
        return todo.text.toLowerCase().includes(filteredTodos.text.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    findMatchingTodo(searchedTodo, filteredTodos)
    todosHeading()
}


// Todos Heading
const todosHeading = () => {
    const incompleteTodo = todos.filter(todo => {
        return !todo.completed
    })

    const heading = document.createElement('h2')
    heading.textContent = `You have ${incompleteTodo.length} todos remaining:`
    document.querySelector('#todos').appendChild(heading);
}

//Return Dom elements for matching todos
const findMatchingTodo = (searchedTodo, filteredTodos) => {
    searchedTodo.forEach(todo => {
        let p = document.createElement('p')

        if (filteredTodos.completed && todo.completed !== true) {
            p.innerText = todo.text;
            document.querySelector('#todos').appendChild(p);

        } else if (!filteredTodos.completed) {
            p.innerText = todo.text;
            document.querySelector('#todos').appendChild(p);
        }
    })
}


