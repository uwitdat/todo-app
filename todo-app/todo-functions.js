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
        id: uuidv4(),
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

    const heading = document.querySelector('h2')
    heading.textContent = `You have ${incompleteTodo.length} todos remaining:`
    document.querySelector('#h2-nest').appendChild(heading);
}

//Return Dom elements for matching todos
const findMatchingTodo = (searchedTodo, filteredTodos) => {

    searchedTodo.forEach(todo => {
        //defining checkbbox
        let checkbox = document.createElement('INPUT')
        checkbox.setAttribute('type', 'checkbox')

        //check if todo.completed upon render
        checkboxIsChecked(todo, checkbox)

        let div = document.createElement('div')
        let p = document.createElement('p')
        p.style.display = 'inline'
        p.style.margin = '1rem'

        //checkbox toggle
        checkbox.addEventListener('change', () => {
            checkboxToggle(todo.id)
        })

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'x'

        //delete btn
        deleteBtn.addEventListener('click', () => {
            removeTodo(todo.id)
            saveTodos(todos)
            searchTodos(todos, filteredTodos)
        })

        if (filteredTodos.completed && todo.completed !== true) {
            appendElements(todo, p, div, checkbox, deleteBtn)

        } else if (!filteredTodos.completed) {
            appendElements(todo, p, div, checkbox, deleteBtn)
        }
    })
}


//checkboxischecked
const checkboxIsChecked = (todo, checkbox) => {
    todo.completed ? checkbox.checked = true : checkbox.checked = false
}

//Checkbox Toggle 
const checkboxToggle = (id) => {
    const todo = todos.find(todo => {
        return todo.id === id
    })

    todo.completed = !todo.completed

    //RE SAVE RE RENDER
    saveTodos(todos)
    searchTodos(todos, filteredTodos)
}

//Remove todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => {
        return todo.id === id
    })
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1)
    }
}


//Append checkbox and delete btn and parent div
const appendElements = (todo, p, div, checkbox, deleteBtn) => {
    p.innerText = todo.text;
    document.querySelector('#todos').appendChild(div);
    div.appendChild(p)
    div.prepend(checkbox);
    div.appendChild(deleteBtn);
}


