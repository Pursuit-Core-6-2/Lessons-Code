/*
  Tasks to do with JavaScript:
    - Listen for button clicks ✓
    - Random pokemon picker ✓
      - Random id picker with range 1 - 809
    - Get/fetch pokemon  ✓
      - GET request to API
    - Get/Fetch pokemon move's PP ✓
      - GET request to API
      - Network request for each move
        - loop

    - Create pokemon cards/Display pokemon ✓
    - Battle pokemon ✓
      - Random winner picker (coin flip) 
      - Update battle history
*/

document.addEventListener('DOMContentLoaded', () => {
  // Code that needs/touches the DOM
  setupButtonListeners()
  fetchTwoRandomPokemon();
})

// Listen for button clicks
const setupButtonListeners = () => {
  const getPokemonBtn = document.querySelector('#get-pokemon-btn')
  getPokemonBtn.addEventListener('click', fetchTwoRandomPokemon)

  const battlePokemonBtn = document.querySelector('#battle-pokemon-btn')
  battlePokemonBtn.addEventListener('click', battlePokemon)
}

const fetchTwoRandomPokemon = () => {
  console.log('fetch pokemon was called')
  cleanArena();
  fetchSinglePokemon();
  fetchSinglePokemon();
}

const fetchSinglePokemon = () => {
  const pokemonId = pickRandomPokemonId();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  fetch(url)
    .then(response => response.json())
    .then(pokemon => {
      let moves = pokemon.moves
      
      for (let move = 0; move < 3; move++) {
        let moveUrl = moves[move].move.url
        fetchMove(moveUrl, pokemon)
      } 
      displayPokemonCard(pokemon)
    })
}

const fetchMove = (url, pokemon) => {
  fetch(url)
    .then(response => response.json())
    .then(move => {
      displayMove(move, pokemon)
    })
}

const displayMove = (move, pokemon) => {
  const pokemonCard = document.querySelector(`#${pokemon.name}`)
  const movesList = pokemonCard.querySelector('.moves-list');

  const moveLi = document.createElement('li')
  moveLi.innerText = move.name + ' PP: ' + move.pp

  movesList.appendChild(moveLi)
}

const displayPokemonCard = (pokemon) => {
  const pokemonCard = document.createElement('div');
  pokemonCard.id = pokemon.name;

  const name = document.createElement('h2');
  name.innerText = pokemon.name;

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  const hp = document.createElement('h3');
  hp.innerText = "HP: " + pokemon.stats[5].base_stat;

  const moves = document.createElement('div')

  const movesHeader = document.createElement('h3')
  movesHeader.innerText = "Moves:"

  const movesList = document.createElement('ul')
  movesList.classList.add('moves-list');

  moves.appendChild(movesHeader)
  moves.appendChild(movesList)

  pokemonCard.appendChild(name)
  pokemonCard.appendChild(sprite)
  pokemonCard.appendChild(hp)
  pokemonCard.appendChild(moves)

  const arena = document.querySelector('#arena')
  arena.appendChild(pokemonCard)
}

const cleanArena = () => {
  const arena = document.querySelector('#arena')
  arena.innerHTML = '';
}

const battlePokemon = () => {
  let arena = document.querySelector('#arena')
  let winner = pickWinner()
  let defeated;
  // let defeated = winner === 1 ? 0 : 1 // Same as if below
  if (winner === 1) {
    defeated = 0;
  } else {
    defeated = 1
  }

  let winnerPokemon = arena.childNodes[winner];
  let defeatedPokemon = arena.childNodes[defeated];

  let footer = document.querySelector('#footer')
  let battleResult = document.createElement('p')

  battleResult.innerText = winnerPokemon.id + " defeats " + defeatedPokemon.id;

  footer.appendChild(battleResult)
  console.log('Battle pokemon was called. Winner is: ', winner)
}

const pickWinner = () => {
  const coinFlipResult = getRandomNumberInRange(0, 2)
  return coinFlipResult;
}

const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * ((max - min) + min))
}

// range from 1 to 809.
const pickRandomPokemonId = () => {
  const MIN_POKEMON_ID = 1
  const MAX_POKEMON_ID = 809;
  const id = getRandomNumberInRange(MIN_POKEMON_ID, MAX_POKEMON_ID + 1)
  return id
}

