const todos = [
    {
        text: 'eat food',
        completed: true
    },
    {
        text: 'brush teeth',
        completed: false
    },
    {
        text: 'drink milk',
        completed: false
    },
    {
        text: 'buy food',
        compelted: true
    },
    {
        text: 'go home',
        completed: false
    },
]


const sortTodos = (array) => {
    array.sort((a, b) => {
        if (a.completed === false && b.completed === true) {
            return -1
        }
    })
}

sortTodos(todos)

console.log(todos)


// const todosLeft = (array) => {
//     return array.filter(obj => {
//         return obj.completed === false
//     })
// }

// console.log(todosLeft(todos))




// const deleteTodo = (array, objText) => {
//     const res = array.findIndex(obj => {
//         return obj.text.toLowerCase() === objText.toLowerCase()
//     })
//     if (res === -1) {
//         const alert = 'sorry no match found'
//         console.log(alert)
//     }
//     else {
//         array.splice(res, 1)
//     }
// }

// deleteTodo(todos, 'Bffuy food')
// console.log(todos)




// todos.splice(2, 1)
// todos.push('new todo')
// todos.shift()

// console.log(`you have ${todos.length} todos!`)

// todos.forEach((todo, idx) => {
//     console.log(`${idx + 1}. ${todo}`)
// })

// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`)
// }
