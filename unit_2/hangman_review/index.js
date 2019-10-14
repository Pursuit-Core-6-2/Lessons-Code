let words = ["cat", "mouse", "house", "independence", "full", "stack", "web"];

const getRandomElement = (list) => {
  let randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex]
}

const displayWord = (word) => {
  let progressWordP = document.querySelector("#progress_word");
  // let dashes = word.split("").map(char => { return '_' }); 
  let dashes = "_ ".repeat(word.length)
  progressWordP.innerText = dashes;
}

let randomWord = getRandomElement(words);

let handleSubmit = (event) => {
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  displayWord(randomWord);
  let userInput = document.querySelector("#user_input");
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit)
})



console.log(randomWord);
