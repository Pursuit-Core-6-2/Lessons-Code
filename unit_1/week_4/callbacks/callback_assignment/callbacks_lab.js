// # Callback Exercises

//## Question One
// Write a function that takes in a callback and calls the callback

//Input: function() { console.log("Hello!") }
//Output: Logs "Hello!" to the console

const caller = (cb) => cb()
caller(function() { console.log("Hello!") })

//## Question Two
// Write a function that takes in a callback and a boolean. 
// If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

//Input: () => console.log("")
const callOnTrue = (bool, cb) => {
  if (bool) {
    cb()
  } else {
    console.log('Ignoring the callback')
  }
}
callOnTrue(true, () => console.log('Boolean true, calling callback'))
callOnTrue(false, () => 'Boolean true, calling callback')

//## Question Three
//Write a function that take in a number and two callbacks.  It should apply the first callback to the number, then the second callback, then return the result

// Input: 4, (num) => num + 3, (num) => num * 2
// Output: 14



let applyCb = (num, cb1, cb2) => {
  let result = cb1(num)
  return cb2(result)
}

let numTwoCbsApplied = applyCb(4, (num) => num + 3, (num) => num * 2)
console.log(numTwoCbsApplied)
  
// ## Question Four
// You are given the following functions:
function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}

// Write a function `shouldIBuyThis` that takes in a balance and a callback (one of the above functions).
// The function should return either "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
const shouldIBuyThis = (balance, cb) => {
  if (cb(balance)) {
    return 'Sure! I\'ve got the money!'
  } else {
    return 'Nope! Gotta keep my savings up!'
  }
}

console.log(shouldIBuyThis(20, horribleSaver)) // logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, liberalSpender)) // logs: "Sure! I've got the money!"
console.log(shouldIBuyThis(20, conservativeSpender)) // logs:  "Nope! Gotta keep my savings up!"
console.log(shouldIBuyThis(101, conservativeSpender)) // logs: "Sure! I've got the money!"

//## Question Five
// a. Write a function `forEachElem` that takes in an array and a callback. Call the callback on each element in the array.

//Output: Logs the following to the console:
// $1
// $4
// $5
// $6
let arr = [1,4,5,6];
let dollarFormat = (elem) => console.log("$" + elem);
let forEach = (arr, cb) => {
  for(let elem of arr) {
    cb(elem)
  }
}

forEach(arr, dollarFormat);

//b. Create a function `logEachElem` that takes an array as an argument logs every element in the input array.
// Use `forEachElem` inside the body of your function.
//Input: [1,2,34]
// Output:
// Logs the following to the console:
// 1
// 2
// 34

const logEachElem = (arr) => {
  forEach(arr, (elem) => {console.log(elem)})
}
logEachElem([1,2,34])

// c. Create a function `logArrTypes` that uses the `forEachElem` method to log each array element followed by its type.

// Input: [1,"Hi", true, {color: "green"}]
// Output:
// Logs the following to the console:
// 1 is a number
// Hi is a string
// true is a boolean
// [object Object] is a object

const logArrTypes = (arr) => {
  forEach(arr, (elem) => {console.log(elem, typeof(elem))})
}

logArrTypes([1,"Hi", true, {color: "green"}])


// ## Question Six
// a. Write a function called `myMap` that takes in an array and a callback as arguments.
// It should return a new array with the callback applied to each element in the array.
// Input: [3,5,6], function(num) { return num * 3 }
// Output: [9, 15, 18]
let myMap = (arr, cb) => {
  let out = [];
  for (let elem of arr) {
    out.push(cb(elem));
  }
  return out;
}

let mapArr =  [3,5,6]
console.log(myMap(mapArr, function(num) { return num * 3 }));

// b. Create a function `allCaps` that takes in an array as an argument, and uses the `myMap` function to return all the elements capitalized.
//Input: ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]
// Output:
let allCaps = (arr) => {
  let out = myMap(arr, (elem) => elem.toUpperCase())
  return out
}

let internetPhrase = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]
console.log(allCaps(internetPhrase));

// [
//     'THE', 'INTERNET',
//      'IS',      'NOT',
//       'A',      'BIG',
//  'TRUCK.',     "IT'S",
//       'A',   'SERIES',
//      'OF',    'TUBES'
// ]

// ## Question Seven
// a. Write a function called `myFilter` that takes in an array and a callback as arguments.
// The callback should take in an element and return a boolean.  
//`myFilter` should return a new array with only values that return true when passed into the callback.
// Input: [1,4,6,7, -3], num => num < 5
// Output:  [1, 4, -3]
const myFilter = (arr, cb) => {
  let out = [];
  for (let e of arr) {
    if (cb(e)) {
      out.push(e)
    }
  }
  return out;
}
let arrToFilter = [1,4,6,7, -3]
console.log(myFilter(arrToFilter, num => num < 5))

// b. Write a function called `removeEvenNumbers` that takes in an array and returns an array with all the even numbers removed.
// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]
const removeEvenNumbers = (arr) => {
  let evens = myFilter(arr, (elem) => elem % 2)
  return evens
} 
let evensToRemove = [1,2,3,4,5,6,7,8,9]
console.log(removeEvenNumbers(evensToRemove))

// c. Write a function called `removeShortWords` that takes in an array and returns an array with all strings containing fewer than 4 characters removed.
// Input: ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]
// Output:
// [ 'JavaScript',
//   'high-level,',
//   'interpreted',
//   'programming',
//   'language',
//   'that',
//   'conforms',
//   'ECMAScript',
//   'specification' ]
const removeShortWords = (arr) => {
  return myFilter(arr, (elem) => elem.length >= 4)
}

let words =  ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]
console.log(removeShortWords(words))