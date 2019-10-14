# 1
\r
Pattern: optionElement.value so that selectElement.value has the selected value
Consequences: 
  * Fetching movies twice 

# 2
\r
Pattern: Not making net request to `/films/<film-id>` because the json retrieved from `/films` already has all the details about all the movies
Reason: Not stated very clearly in readme that this is what we wanted them to do.
Consequences:
  - Not practicing making subsequent and dependant network requests

# 3
\r
Pattern: Repeating logic instead of outsourcing to function
Consequences: 
  * Not DRY
Examples: Repeating a while loop to empty an HTML container element

# 4
\r
Pattern: Unsafe use of `.innerHTML`
Consequences: 
  * A site can be prone to XSS attacks 
  * Try `<img src=x onerror="console.log('hello')" />` on a review text box

# 5
\r
Pattern: Left console.log
Consequences: 
  * Dirty console. Leaking data to a user that knows how to access the console.

# 6
\r
Pattern: Use of `onchange` attributes set on HTML instead of `.addEventListener()` for handling events
Consequences: 
  * Dirty HTML code and mix of approaches.

# 7
\r
Pattern: Forgot about `event.target`. Didn't take advantage of it for the `select` box
Consequences: 
  * They would grab the element with `.getElementById` or `.querySelector` which is an unnecessary step.

# 8
\r
Pattern: Research to solve a problem finding new properties and approaches that were never directly discussed in class accomplishing a working solution.
Consequences: 
  * They would be great developers. Because this is what we do on a daily basis

# 9
\r
Pattern: Listening of `click` or `submit` event in button instead of `form` element
Consequences: 
  * Never capturing the `submit` event unable to prevent the default
  * Unable to send the form by hitting the `return`/`enter` key.


# 10
\r
Pattern: Not committing often and descriptively
Consequences: 
  * Hard to see and understand progress of project over time
Example:
  - commit 0. HTML skeleton with ids and classes
  - commit 1. getAllMovies function that makes GET request to API
  - commit 2. populate select options by using the fetched movies titles
  - commit 3. handle user changing option in movie select box
  - commit 4. handle user changing option in movie select box
  - commit 5. handle user submitting a review and adding to review list
  - commit 6. add movie title in bold to submitted review 
  - commit 7. fix adding review if review text box is empty
  - commit 8. header CSS styling and responsiveness
  - commit 9. rest of the page CSS centering and font family change


