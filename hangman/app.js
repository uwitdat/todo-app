const div = document.querySelector('#div')
const p = document.createElement('p')


let game1

const userGuess = document.createElement('p')
div.appendChild(p)
div.appendChild(userGuess)


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    p.textContent = game1.getPuzzle()
    userGuess.textContent = `Guesses remaining: ${game1.guesses}`
    render()
})

const render = () => {
    p.textContent = game1.getPuzzle()
    userGuess.textContent = `Guesses remaining: ${game1.guesses}`
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', (e) => {
    startGame()
})

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log('ERROR', err)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })

// getCountry('CA').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })


