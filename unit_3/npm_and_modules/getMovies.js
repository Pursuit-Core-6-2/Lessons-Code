const axios = require('axios');

axios
  .get("https://ghibliapi.herokuapp.com/films")
  .then(response => {
    let films = response.data;
    films.forEach(film => console.log(film.title))
  });
