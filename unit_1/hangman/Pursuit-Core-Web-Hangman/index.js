const rl = require('readline-sync');
const dictionary = require('./dictionary');

const generateRandomNumber = (min, max) => {
  return Math.floor((Math.random() * (max - min)) + min)
}

const getRandomWord = (dict) => {
  let randomIndex = generateRandomNumber(0, dict.length - 1);
  return dict[randomIndex];
}

const hideWord = (word) => {
  return '_'.repeat(word.length);
} 

const replaceMatches = (letter, guessWord, randomWord) => {
  let strArr = guessWord.split('')
  for(let i = 0; i < randomWord.length; i++) {
    let char = randomWord[i];
    if (char === letter) {
      strArr[i] = letter
    }
  }
  return strArr.join('')
}
// if letter !used
// if letter in word
const main = () => {
  let randomWord = getRandomWord(dictionary);
  let guessWord = hideWord(randomWord);
  console.log(randomWord)
  console.log(guessWord)
  while(true) {
    let letter = rl.question('Guess a letter: ').toLowerCase().trim()
    guessWord = replaceMatches(letter, guessWord, randomWord)
    if (letter === 'break') break;
    console.log(guessWord)
  }

}



main()

console.log('=>')
