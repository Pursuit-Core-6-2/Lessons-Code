# Events

## Intro 
* We need to wait until the dom is loaded to use
any javascript that interacts with the DOM

* We have only handled user interaction through a click
on a button. What if we wanted to respond to other forms like 
entering text in text field or moving the mouse;

* Events allow us to do just that. Listen for events

* All elements have a method `.addEventListerner(event, callback)`
  This will call the callback whenever the event happens
* Chrome's infinite event loop. 

## Asynchronous Code
* Code reading top to bottom. Async is the solution
* Facebook example. What if you had to wait until everyting was loaded
* Deli analogy. 
* Final note about window.alert()

## DOMContentLoaded
* Putting javascript on a separate file. Import in the `<head>`
* But how do we wait for the dom to load?
* .addEventListener('DOMContentLoaded', () => {})
* __Exercise__ display an alert that shows how many p tags are present in the page

## Click event
* How did we fire a function when a button was clicked before?
* Now using .addEventListener()
* Note on event name as attribute in html vs addEventlistener
* Event argument to the callback
* __Exercise__ add an event listener in a paragraph that when you hover over an element 'mouseover' displays an alert

## Submit
