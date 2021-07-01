const div = document.querySelector('#div')
const p = document.createElement('p')
const userGuess = document.createElement('p')
userGuess.textContent = `Guesses remaining: ${gameOne.guesses}`


p.textContent = gameOne.getPuzzle()
div.appendChild(p)
div.appendChild(userGuess)


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    p.textContent = gameOne.getPuzzle()
    userGuess.textContent = `Guesses remaining: ${gameOne.guesses}`
})


