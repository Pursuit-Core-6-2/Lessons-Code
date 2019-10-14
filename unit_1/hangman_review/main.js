const readlineSync = require('readline-sync')

let words = ['daddy', 'bubble', 'button', 'car'] //words.length = 4
//              0         1         2       3
const getRandomWord = (words) => {
//let randomIndex = Math.floor(Math.random() * (words.length - 0) + 0)
  let randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex]
}

const createHiddenWord = (word) => {
  let hiddenWord = word.split('').map(char => { return '_' })
  return hiddenWord
}

// const createHiddenWord2 = (word) => {
//   let hiddenWord = []
//   for(let i = 0; i < word.length; i++) {
//     hiddenWord.push('_')
//   }
//   return hiddenWord
// }

const isLetterInWord = (letter, word) => {
  return word.includes(letter)
}

// 2. Replace underscore where match is found
const replaceMatches = (letter, randomWord, hiddenWord) => {
  for(let i = 0; i < randomWord.length; i++) {
    let crrChar = randomWord[i]
    if (crrChar === letter) {
      hiddenWord[i] = letter;
    }
  }
  return hiddenWord;
}

// let result = replaceMatches()
// 'c a r' => ['_', 'a', 'r']
//  0 1 2       0    1    2

const startGame = () => {
  let randomWord = getRandomWord(words);
  let hiddenWord = createHiddenWord(randomWord)
  let tries = 6;

  while(tries > 1 && hiddenWord.join('') !== randomWord) {
    console.log('====================')
    console.log(`=> Tries: ${tries}`)
    console.log(randomWord)
    console.log('=>', hiddenWord.join(''))
    const answer = readlineSync.question('Type a letter: ')

    // 1. Check user answer against randomWord
    if (isLetterInWord(answer, randomWord)) {
      hiddenWord = replaceMatches(answer, randomWord, hiddenWord); 
    } else {
      tries--;
      console.log('Nope!! that letter is NOT in the word!')
    }
  }

}

startGame()
