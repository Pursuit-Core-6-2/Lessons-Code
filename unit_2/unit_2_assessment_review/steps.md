## Building Studio Ghibli Films reviewer.

1. Read the README
2. Identify requirements/needs
   1. List out app components.
      * Page Header
        * Ghibli Logo. Centered vertically. Opposites side.
        * App title. Centered vertically
      * Body
        * Select box to pick a movie
        * Single Movie details section
          * Movie title
          * Release year
          * Description
        * Form to add review
          * Text input
          * Submit button
        * Reviews list
   2. Find out data needs and sources.
      Data Need:        Data Source:
       * Ghibli Films.  https://ghibliapi.herokuapp.com/films?fields=id,title
       * Film details.  https://ghibliapi.herokuapp.com/films/{id}
       * Reviews.       User
3. Wireframing the App
4. Build out HTML skeleton
5. Code!!
   1. Fetch request to populate select box with film titles
   2. Listen for when the user selects a movie in the selector. Listen for change on the select.
   3. Fetch film details to display title, release year & description. 
   4. Listen for when the user submits a review.

### Notes
* Second request on select not explicitly stated as needed.
