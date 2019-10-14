let hangmanGame = new HangmanGame()

document.addEventListener("DOMContentLoaded", () => {
    configureGuessButton()
    updateUI()
})

function configureGuessButton() {
    let button = document.querySelector("#form")
    button.addEventListener("submit", handleFormSubmitted)
}

function handleFormSubmitted(event) {    
    event.preventDefault()
    let displayText = ""
    let inputLetter = getInputText()
    let guessResult = hangmanGame.guessLetter(inputLetter)
    
    switch (guessResult) {
        case HangmanGuessResults.GAMEOVER.VICTORY:
            showPlayAgainButton()
        case HangmanGuessResults.GAMEOVER.DEFEAT:            
            showPlayAgainButton()
            updateUI()
            break
        case HangmanGuessResults.CORRECT:
            updateUI()
            break
        case HangmanGuessResults.INCORRECT:
            updateUI()
            break
    }    
    document.querySelector("#gameMessagePara").innerText = guessResult    
}

function getInputText() {
    let letterInput = document.querySelector("#letterInput")
    return letterInput.value.toLowerCase()
}

function updateUI() {
    console.log("updatingui")
    let guessedLettersPara = document.querySelector("#guessedLettersPara")
    if (!hangmanGame.guessedLetters.length) {    
        guessedLettersPara.innerText = "No guessed letters"
    } else {
        guessedLettersPara.innerText = hangmanGame.guessedLetters
    }    

    if (hangmanGame.guessesRemaining === 0) {
        document.querySelector("#currentDisplayWord").innerText = hangmanGame.wordToGuess
    } else {
        document.querySelector("#currentDisplayWord").innerText = hangmanGame.getDisplayText()
    }

    document.querySelector("#guessesRemainingPara").innerText = hangmanGame.guessesRemaining + " Guesses remaining"
    document.querySelector("#hangmanImage").src = getImage(hangmanGame.guessesRemaining)
    document.querySelector("#letterInput").value = ""
}

function showPlayAgainButton() {
    let newButton = document.createElement("button")
    newButton.innerText = "New Game"
    document.querySelector("#fieldset").disabled = "disabled"
    newButton.addEventListener('click', () => {
        hangmanGame = new HangmanGame()
        updateUI()
        document.querySelector("#gameMessagePara").innerText = 'Welcome to Hangman'
        newButton.parentElement.removeChild(newButton)
        document.querySelector("#fieldset").disabled = undefined
    })
    document.querySelector("#form").appendChild(newButton)
}

function getImage(guessesRemaining) {
    let imageNum = 10 - guessesRemaining
    return "https://www.oligalma.com/downloads/images/hangman/hangman/" + imageNum + ".jpg"
}
