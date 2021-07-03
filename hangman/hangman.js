//PROTOTYPAL  INHERITANCE

class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLtrs = []
    this.status = 'playing'
    this.ltrsRemain = word.length
  }

  getPuzzle() {
    let puzzle = ''
    this.word.forEach((ltr) => {
      if (this.guessedLtrs.includes(ltr) || ltr === ' ') {
        puzzle += ltr
      } else {
        puzzle += '*'
      }
    })
    return puzzle
  }

  getStatus() {
    const finished = this.word.every((ltr) => this.guessedLtrs.includes(ltr) || ltr === ' ')

    if (this.guesses === 0) {
      this.status = 'failed'
    }
    if (finished) {
      this.status = 'finished'
    } else {
      return
    }
  }

  gameMessage() {
    const h1 = document.querySelector('#status')
    if (this.status === 'playing') {
      h1.textContent = `Guesses remaining: ${game1.guesses}`
    } if (this.status === 'failed') {
      h1.textContent = `Nice try! the word was ${this.word.join('')}`
    } if (this.status === 'finished') {
      h1.textContent = `Great work! You guessed the word!`
    }
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()
    let isUnique = this.guessedLtrs.includes(guess)

    let gameState = true

    this.status === 'playing' ? gameState : gameState = false;

    if (isUnique && gameState) {
    } else {
      this.guessedLtrs.push(guess)
    }

    if (this.word.includes(guess) && !isUnique && gameState) {
      this.ltrsRemain--

    } else if (!this.word.includes(guess) && !isUnique && gameState) {
      this.guesses--
    }
    this.getStatus()
    this.gameMessage()
  }
}


