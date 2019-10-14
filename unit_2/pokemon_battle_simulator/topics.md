## To Review
// Making Network request
  - Axios => async - await
  - Fetch
// Promises
// DOM Creating elements
// CSS

## Building Pokemon Battle Simulator
1. Read README ✓
  * Components
    - Header (h1)
    - Description (p)
    - Two buttons (buttons)
      - Getting Pokemon
      - Battle
    - Arena (div)
      - Pokemon A (div)
        - Name (h2)
        - Picture [sprite](img) 
        - HP (h3)
        - Moves (ul)
          - Move name (li)
          - Move PP   (li)
      - Pokemon B (Same as A)
    - Battle history (h3)
      - Pokemon winner and defeated names (p) 
    - Background color/image

2. Find out API endpoints to get data ✓
  * Date needs:
    * 2 randomly picked pokemon
    - Pokemon
      - Name
      - Sprite url
      - HP
      - Moves
        - Name
        - PP

  * Data Sources: 
    - Pokemon: https://pokeapi.co/api/v2/pokemon/<pokemon-id>/
      * Name: pokemon.name
      * Sprite url: pokemon.sprites.front_default
      * HP: pokemon.stats[5].base_stat
      * Moves: 
        - Notes
          - Move PP: https://pokeapi.co/api/v2/move/13/
          - first or random 4 moves only.
          - What if a pokemon doesn't have 4 moves total.
        - pokemon.moves[index].move.url
        - pokemon.moves[index].move.name


3. Wireframing the APP ✓

4. Build out HTML skeleton

5. Code!!
