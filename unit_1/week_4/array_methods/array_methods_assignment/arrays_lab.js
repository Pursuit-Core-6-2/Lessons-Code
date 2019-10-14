//# Exercises
const assert = require('assert'); // For asserting results

// 1. Given an array of numbers, write a function that returns a new array where 
// every element is incremented by 10.
console.log("==================== 1 ====================")

console.log([1,2,3,4,5].map(n => n + 10));

// 2. Given an array, return a new array where every non-string element is 
// converted to an empty string.
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
console.log("==================== 2 ====================")

let mixedArr = ["a", 123, "b", "c", {name: "cat"}, () => true, undefined, NaN, [1]]

// Oneliner, difficult to understand
console.log(mixedArr.map(e => typeof e === 'string' ? e : '')) 

// More expressive way
console.log(mixedArr.map(element => {
  if (typeof element === 'string') {
    return element
  } else {
    return ''
  }
}))

// 3. Write a function that returns only the even elements in an array of numbers.
// Input: [1,2,3,4,5]
// Output: [2,4]
console.log("==================== 3 ====================")

let evenAndOdds = [1,2,3,4,5]
console.log(evenAndOdds.filter(n => {
  if (n % 2 === 0) {
    return n
  }
}))
console.log(evenAndOdds.filter(n => n % 2 === 0))
console.log(evenAndOdds.filter(n => !(n % 2)))

// 4. Write a function that checks if all elements in the array are the same.
// Input: [1,1,1,1,1], Output: true
// Input: [1,1,1,1,2], Output: false

console.log("==================== 4 ====================")
function areAllSame(arr) {
  let element = arr[0]
  return arr.every((currentElement) => {
    return element === currentElement
  })
}
let allSame1 = [1,1,1,1,1]
let allSame2 = [1,1,1,1,2]
console.log(allSame1, areAllSame(allSame1))
console.log(allSame2, areAllSame(allSame2))

// 5. Write a function that returns the sum of every element in an array.
// Input: [1,2,3,4,5]
// Output: 15
console.log("==================== 5 ====================")

let arrToSum = [1,2,3,4,5]
console.log(arrToSum.reduce((accumulator, element) => {
  return accumulator + element
}))
console.log(arrToSum.reduce((acc, el) => acc + el))

// 6. Write a function that finds largest number in an array.
// Input: [1,2,6,3,4,5]
// Output: [6]
console.log("==================== 6 ====================")
console.log("If no output all tests were passed")
const findLargest = (arr) => {
  return arr.reduce((acc, el) => {
    if (el > acc) {
      return el
    } else {
      return acc
    }
  })
}

let arrWithLargest = [1,2,6,3,4,5]
let arrWithLargest2 = [Infinity,2,6,3,4,5]
let arrWithLargest3 = [2,6,3,4,5,Infinity]

assert.strictEqual(findLargest(arrWithLargest), 6)
assert.strictEqual(findLargest(arrWithLargest2), Infinity)
assert.strictEqual(findLargest(arrWithLargest3), Infinity)

// 7. Write a function `countZeroes`, which takes an array of numbers as its 
// argument and returns the amount of zeroes that occur in it.
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6

console.log("==================== 7 ====================")
console.log("If no output all tests were passed")
const countZeroes = (arr) => {
  return arr.reduce((acc, el) => {
    if (el === 0) {
      return acc += 1;
    }
    return acc;
  }, 0)
}

assert.strictEqual(countZeroes([1,0,0,2,0,3,0,0,0]), 6)

// 8. Write a function that doubles every element in an array.
// Input: [1, 2, 3, 4]
// Output: [2,4,6,8]

console.log("==================== 8 ====================")
console.log("If no output all tests were passed")

const doubleElements = (arr) => {
  let doubles = arr.map(el => el * 2)
  return doubles;
}

assert.deepStrictEqual(doubleElements([1,2,3,4]), [2,4,6,8])
assert.deepStrictEqual(doubleElements([100,200,300,400]), [200,400,600,800])

//9. Write a function that finds the product of every element in an array doubled
// Input: [1,2,3,4]
// Output: 20
console.log("==================== 9 ====================")
console.log("If no output all tests were passed")

const findProduct = (arr) => {
  return arr.reduce((product, element) => product * element)
}

assert.strictEqual(findProduct([1,2,3,4]), 24)
assert.strictEqual(findProduct([1,2,3,0]), 0)
assert.strictEqual(findProduct([1,1,1,1]), 1)

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Return a new array of every element of arr that can be evenly divided by divisor.
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
console.log("==================== 10 ====================")
console.log("If no output all tests were passed")

const elementDivisibleBy = (divisor, arr) => {
  let dividends = arr.filter(num => num % divisor === 0)
  return dividends;
}

assert.deepStrictEqual(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]), [5,10,15]) 
assert.deepStrictEqual(elementDivisibleBy(2, [5,7,9,11,13,15]), []) 

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
// Input: [6,7,8,9]
// Output: [0,7,16,27]
console.log("==================== 11 ====================")
console.log("If no output all tests were passed")

const numberTimesIdx = (arr) => {
  return arr.map((num, i) => num * i)
}

assert.deepStrictEqual(numberTimesIdx([6,7,8,9]), [0,7,16,27])
assert.deepStrictEqual(numberTimesIdx([2,4,6,8,12]), [0,4,12,24,48])

//12. Write a function that returns whether or not every value in an array is a 
// positive even number that doesn't end in 0.
// Input: [2,4,6,8,12]
// Output: true
// Input: [2,4,6,8,10]
// Output: false
console.log("==================== 12 ====================")
console.log("If no output all tests were passed")

const allPositiveEven = (arr) => {
  return arr.every(num => (num > 0) && (num % 2 === 0) && (num % 10 !== 0))
}

assert.strictEqual(allPositiveEven([2,4,6,8,12]), true)
assert.strictEqual(allPositiveEven([2,4,7,8,12]), false)
assert.strictEqual(allPositiveEven([2,4,6,8,10]), false)
assert.strictEqual(allPositiveEven([2,4,60,8,12]), false)
assert.strictEqual(allPositiveEven([22,44,62,86,122]), true)

// 13. Write a function that returns the sum of all odd numbers in an Array
// Input: [1,2,3,4,5]
// Output: 9
console.log("==================== 13 ====================")
console.log("If no output all tests were passed")

const sumOddNums = (arr) => {
  return arr.reduce((sum, num) => {
    if (num % 2) {
      return sum + num
    } 
    return sum
  }, 0)
}

assert.strictEqual(sumOddNums([1,2,3,4,5]), 9)
assert.strictEqual(sumOddNums([2,2,3,4,5]), 8)
assert.strictEqual(sumOddNums([2,4,6,8,10]), 0)

// 14. Write a function that returns a new array containing all of the strings 
// in the original array uppercased.
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
console.log("==================== 14 ====================")
console.log("If no output all tests were passed")

const findStringsAndUppercase = (arr) => {
  return arr.filter(element => typeof element === 'string')
            .map(str => str.toUpperCase())
}

assert.deepStrictEqual(findStringsAndUppercase(
  [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
), ["CAT", "DOG", "BEAR"])

// ## Bonus:
// You can write your own array methods!
// Array.prototype.sayHi = function() {
//   console.log("Hi")
// }
// Now every array that you write has a `sayHi` method that you can call.
// let myArr = [1,2,3]
// myArr.sayHi() //Logs "Hi" to the console
// 1. Using Array.prototype add a new method `myForEach` that mimics the behavior 
// of the built in `forEach`.

console.log("\n\n## Bonuses ##")

console.log("==================== B1 ====================")
Array.prototype.myForEach = function(callback) {
  let arr = this
  for(element of arr) {
    callback(element)
  }
}

let a = [200, 100, 000]
a.myForEach(e => console.log(e * 2))

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
// 3. Write a `myFilter` that behaves the same as `filter`.
// 4. Write a `myEvery` that behaves the same as `every`.
// 5. Write a `myReduce`. It should use the first element in the array if none is given.
// 6. Write a `myJoin` function.
// 7. Write a `mySlice` function.
// 8. Write a `myTranspose`. This function should transpose a matrix.
// let mtx = [
//             [1, 2],
//             [3, 4],
//             [5, 6]
//           ]
// mtx.myTranspose();
// // => [
//         [1, 3, 5],
//         [2, 4, 6]
//        ]
// 9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
// => [1, 2, 3, 4, 5, 6, 7, 8]
