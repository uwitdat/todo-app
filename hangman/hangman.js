const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLtrs = []
    this.status = 'playing'
    this.ltrsRemain = word.length
}

Hangman.prototype.getPuzzle = function () {
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

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    isUnique = this.guessedLtrs.includes(guess)

    if (isUnique) {
        console.log('already guessed')
    } else {
        this.guessedLtrs.push(guess)
    }

    if (this.word.includes(guess) && !isUnique) {
        console.log('correct guess')
        this.ltrsRemain--
        console.log(this.ltrsRemain)
    } else if (!this.word.includes(guess) && !isUnique) {
        console.log('INcorrect guess')
        this.guesses--
    }
    this.getStatus()
}

Hangman.prototype.getStatus = function () {
    if (this.guesses === 0) {
        this.status = 'failed'
        console.log('failed')
    }
    if (this.ltrsRemain === 0) {
        this.status = 'finished'
        console.log('finished')

    } else {
        console.log('playing')
    }
}

const gameOne = new Hangman('Cat', 2)



