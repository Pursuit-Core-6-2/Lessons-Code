document.addEventListener('DOMContentLoaded', () => {
  fetchDogImage();
  loadCat();
})

let catCounter = 0;
let dogCounter = 0;

const fetchDogImage = async () => {
  let url = "https://dog.ceo/api/breeds/image/random"
  try {
    let response = await axios.get(url)
    let imageUrl = response.data.message
    displayImage(imageUrl, "dog")
    createButton("dog");
  } catch (err) {
    displayError(err)
  }
}

const displayImage = (url, species) => {
  let img = document.createElement('img');
  img.src = url;

  if (species === "cat") {
    let catDiv = document.querySelector('#cat-div')
    catDiv.appendChild(img);
  } else {
    let dogDiv = document.querySelector('#dog-div')
    dogDiv.appendChild(img);
  }
}

const displayError = (err) => {
  let errorP = document.createElement('p')
  errorP.innerText = "Oops! There was an error!";

  let mainDiv = document.querySelector('#main')
  mainDiv.appendChild(errorP);
}

const loadCat = async () => {
  const myURL = "https://api.thecatapi.com/v1/images/search";
  try {
    let response = await axios.get(myURL);
    let imageUrl = response.data[0].url;
    displayImage(imageUrl, "cat");
    createButton("cat");
  } catch {
    displayError(err)
  }
}

const createButton = (species) => {
  let button = document.createElement('button')

  if (species === 'dog') {
    button.innerText = "Dog is the cutest!"
    button.addEventListener("click", pickDog)
    let dogDiv = document.querySelector('#dog-div')
    dogDiv.appendChild(button);
  } else {
    button.innerText = "Cat is the cutest!"
    button.addEventListener("click", pickCat)
    let catDiv = document.querySelector('#cat-div')
    catDiv.appendChild(button);
  }
}

const pickCat = () => {
  catCounter = catCounter + 1;

  let catDiv = document.querySelector('#cat-div')

  let oldCatCounterP = document.querySelector('#cat-counter');

  let newCatCounterP = document.createElement('p')
  newCatCounterP.id = 'cat-counter'

  if (!oldCatCounterP) {
    newCatCounterP.innerText = catCounter;
    catDiv.appendChild(newCatCounterP);
  } else {
    newCatCounterP.innerText = catCounter;
    catDiv.replaceChild(newCatCounterP, oldCatCounterP);
  }


  console.log('catCounter', catCounter)
}

const pickDog = () => {
  dogCounter = dogCounter + 1;
  console.log('dogCounter', dogCounter)
}
