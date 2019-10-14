// 1. Fetch request to populate select box with film titles
//  * Network request to get all films ✔
//  * Populate the select with options ✔
// 2. Listen for when the user selects a movie in the selector. Listen for change on the select.
//   * Add event listener
// 3. Fetch film details to display title, release year & description. 
//    * Fetch details
//    * Display details
// 4. Listen for when the user submits a review.
//    * Then add review text to the review list.

document.addEventListener('DOMContentLoaded', () => {
  getAllFilms();
  setupFilmSelectorListener();
  setupFormListener();
})

const getAllFilms = () => {
  const apiUrl = "https://ghibliapi.herokuapp.com/films?fields=id,title"
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((films) => {
      populateSelectOptions(films)
    })
    .catch((err) => {
      handleError("Oops! There was a problem. Please try again.");
    })
}

const populateSelectOptions = (films) => {
  // Create option tags within the select with film titles
  // Grab select box
  const select = document.querySelector('#film-selector')
  const emptyOption = document.createElement('option')
  emptyOption.innerText = "--- Select a Film ---"
  emptyOption.value = ""

  select.add(emptyOption);

  for (let film of films) {
    const option = document.createElement('option');
    option.innerText = film.title; // What is displayed to the user
    option.value = film.id // Hidden value that will be sent
    select.add(option)
  }
}

const setupFilmSelectorListener = () => {
  const select = document.querySelector('#film-selector')
  select.addEventListener('change', handleMovieSelection)
}

const setupFormListener = () => {
  const form = document.querySelector('#review-form')
  form.addEventListener('submit', handleNewReview)
}

const handleMovieSelection = (event) => {
  // 3. Fetch film details to display title, release year & description.
  console.log('select was value changed: ', event.target.value);
  const filmId = event.target.value;

  if (filmId) {
    let singleFilmUrl = "https://ghibliapi.herokuapp.com/films/" + filmId;

    fetch(singleFilmUrl)
      .then(response => response.json())
      .then(film => {
        displayFilmDetails(film)
        showForm();
      })
      .catch(error => {
        handleError("Oops! There was a problem. Please try again.");
      })
  } else {
    clearFilmSection();
    hideForm();
  }
}

const clearFilmSection = () => {
  const filmSection = document.querySelector("#single-movie-section");
  while(filmSection.firstChild) {
    filmSection.removeChild(filmSection.firstChild)
  }
}

const displayFilmDetails = (film) => {
  const filmSection = document.querySelector("#single-movie-section");

  clearFilmSection();
  
  const title = document.createElement('h3')
  title.id = "film-title"
  title.innerText = film.title

  const releaseYear = document.createElement('p')
  releaseYear.innerText = film.release_date

  const description = document.createElement('p')
  description.innerText = film.description

  // filmSection.appendChild(title)
  // filmSection.appendChild(releaseYear)
  // filmSection.appendChild(description)
  filmSection.append(title, releaseYear, description)
}

// 4. Listen for when the user submits a review.
//    * Then add review text to the review list.
const handleNewReview = (event) => {
  event.preventDefault();

  const reviewInput = document.querySelector("input[name='review']");
  const reviewList = document.querySelector('#review-list');
  const filmTitle = document.querySelector("#film-title").innerText;

  const titleStrong = document.createElement('strong')
  titleStrong.innerText = filmTitle + ": ";

  const text = document.createTextNode(reviewInput.value);
  reviewInput.value = "" //Clear review text box

  const reviewLi = document.createElement('li');
  reviewLi.append(titleStrong, text);
  reviewList.appendChild(reviewLi);
}

const hideForm = () => {
  const form = document.querySelector('#review-form');
  form.style.display = 'none';
}

const showForm = () => {
  const form = document.querySelector('#review-form');
  form.style.display = 'block';
}

const handleError = (message) => {
  let errorNotification = document.createElement('p')
  errorNotification.innerText = message
  document.body.appendChild(errorNotification);
}
