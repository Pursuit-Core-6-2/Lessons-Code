* Function Syntax Review
  - input <-> arguments & output <-> return value
  - Return vs Console.log
  - Function as values
  - Quiz Review

* Intro to Callbacks
  - Function as input to other functions
    * A function is a value just like arrays, numbers, strs we can pass them to other functions
  - Motivation: Change the behaviour of functions. 
    * Having the main/higher order function do 'heavy lifting' callback is what do we ant to do with the result of the work, 
    * How we want the work done
    * What do we do with the result of the work done
    * Modularization (look up definition) & Reusability

* Our first callback sayHello, sayBye passed to a function `caller`
  - [EX] What would happen here `caller(sayHello())`

* HOF combine(arg1, arg2, callback)
    - [EX] try it passing writing and passing mult, divide, modulo, concat

* forEach(arr, callback) HOC
    * logValue()
    * logTriple()
    * logDollarFormattedNum()
    * [EX] Can we come up with our own example
    * setInterval(cb, miliseconds) takes in a callback
      * Available in the global scope
      * setInterval handles the timing what is going to be executed what you pass as the callback

* Anonymous callback functions
    * with setInteval 
      - ES5 syntax
      - ES6 syntax
    * with forEachElem
      - ES5 syntax
      - ES6 syntax

* Map
    * So far our callbacks have only been logging. Let's have them change the return value of our functions
    * Illustrate from code in lesson
    * [EX] Given the array of users below, use mapValues to return an array of only their email addresses.
  - [EX] Write a function that filters an array for the letter `a` or num 0
