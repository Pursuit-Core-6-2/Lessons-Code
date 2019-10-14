#Functions Lesson Plan

- Motivation:
  * Logging 2 arrays with two different for loops
  * Reusability
  * DRY

- Function definition
  * function keyword
  * function anatomy  
    - squareNum example
    - parameters & arguments
    - function body {}
    - return value
  * function that logs 'hello world'. What's the return value, why?
  * function that returns 'hello world'. What's the reutn value, why?
  * [Notes]
    - https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/

- Loggin is NOT returning!
- Let's get DRY with a printArray function
  * write printArray(arr)
  * written in ES5 & ES6
  * ES6 printArray with implicit return. No multiple statements.

- Invoking a function
  * name and parenthesis (arguments)
  * [EX] write a function isEven() in both ES5 & ES6 syntax
    - What should the return value of this function be?
    - What the inputs/params be?

- Functions as Values
  * Functions just like strings, arrays and objects are values
  * ES6 arrow function
  * typeof function

- Single Responsibility Principle
  * Programming Wisdom (@CodeWisdom) tweet https://twitter.com/CodeWisdom/status/1100389268843872256

- Side effects.  
  * Anything that happens inside a function that results in a change in the workd outside of the function
```js
        let myNumber = 2
        const sideEffect = function(){
          myNumber += 1
        }

        sideEffect()
        console.log(myNumber)
```
  *[EX]. Lesson exercises

- Function Hoisting
  * Example
```js
        console.log(sayHelloDec) // logs: sFunction: sayHelloec
        sayHelloDec(); // logs "hello"

        function sayHelloDec() {
          console.log('hello');
  
```

- Variable scope
  1. Try to log local `greeting` variable outside of local scope
  2. Function modifying global variable as [EX] What are we going to see happen?
    - Define variable in global scope
    - Reassing variable in local scope and log inside function
    - Log variable outside of function
  3. Function scope declares and assign same global scope variable
    - log inside and outside of function
  4. Demonstrate `let` inside and out of if statment and conntrast with `var`
  * Inner & outer circle drawing as analogy for scopes


## Things fellow didn't know during PSkills
- Open source software
- HackerRank
