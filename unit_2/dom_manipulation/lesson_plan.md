# Dom Manipulation with JavaScript

* querySelector()
  - Motivation,
    * What if we don't have the id to getElementById?
  - Is flexible it can find an element based on different attributes. like id, class even tag name
  - Demonstration
    - Grab p tag by tag name as selector. first.html
    - What happens if we have multiple paragraphs?
    - Grab p tag by id. #element_id

* Selectors
  - tag name
  - id
  - class
  - Extra (introduce resource) https://www.w3schools.com/jsref/met_document_queryselector.asp

* querySelectorAll()
  - Motivation
    * What if we want all the p tags?
    * Return value
  - Demonstration
    * Get all the paragraphs. 
    * Looping over returned list
    * Any use cases you can think of? background color of every other paragraph
  - Exercise
    * Add 3 images and resize them all with javascript to be with 200px wide

* Creating new elements
  - Motivation
    * So far we have been modifying and we want to display anything we need to create the element where the content will appear before hand
  - Demonstration
    * Creating a thanks paragraph but not attaching it to DOM
    * use appendChild to add element to document.body
    * What if we want to add the element to a list not the body? second.html
    * Creating the entire list with JS instead of html. three.html
      - What if we didn't want to display the position of the player anymore. Prev approach vs JS approach
      - Data coming from online sources
  - Exercises
    * Add your todos to an array of strings. Create an `<ol>` with all of them and display them to the dom.
    * PB&J recipe from previous labs create a `ol` for the steps and a `ul` for the ingredients. Add them with javascript.

* Deleting elements
  - We need both the parent and the child. four.html
  - Take advantage of node.parentNode instead of querySelector the parent
  - Remove paragraphs with button on click

* Replacing elements
  - We need the parent, the new element and the element that we want to replace
  - Exercise
    * Replace a cat image with a dog image.
    * Replace a p tag with with an h1 tag
