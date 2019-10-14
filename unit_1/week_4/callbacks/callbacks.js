// function add(num1, num2) {
//   return num1 + num2
// }

// const addES6 = (num1, num2) => {
//   return num1 + num2
// }

// addES6(2, 3)


// function sayHello() {
//   console.log("Hello!")
// }

// function sayGoodbye() {
//   console.log("Goodbye!")
// }

// function caller(callback) {
//   callback()
// }

//console.log(sayHello)

// caller(sayHello)
// "Hello!"

// caller(sayGoodbye)
// "Goodbye!"


function combine(arg1, arg2, combiningCallback) {
  let result = combiningCallback(arg1, arg2)
  console.log(`The args are: ${arg1} & ${arg2}. Output: ${result}`)
  return result;
}

// function add(num1, num2) {
//   return num1 + num2;
// }

// combine(2, 4, add)
// combine(2, 4, (num1, num2) => num1 + num2)
// combine(2, 4, function(num1, num2) { 
//   return num1 + num2 
// })

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function concat(num1, num2) {
//   return num1 + "" + num2;
// }

// Write a function `multiply` that multiplies 2 values
// then pass `multiply` to combine as the callback

// combine(2, 4, multiply);
// combine(2, 4, concat);

// function sayBye() {
//   console.log("Bye!")
// }

// setInterval(
//   function() {
//     console.log("Bye!")
// }, 30)

// setInterval(() => console.log("Bye Bye!"), 300)

function forEachElem(arr, callback) {
  let output = [];
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // invoke our callback on each item of the array
    let callbackReturnVal = callback(arr[i])
    output.push(callbackReturnVal);
  }
  return output;
}

function multiply3 (num) {
  return num * 3
}

function formatDollarNum(num) {
  return "$" + num
}

let arr = [1, 2, 3];
let returnVAl = forEachElem(arr, multiply3);
// console.log(returnVAl)

// forEachElem(arr, logTriple);
// will log: 3, 6, 9

// forEachElem(arr, logDollarFormattedNum)
// will log: $1, $2, $3

let users = [
  {
    name: "Oziel",
    email: "Oziel@pursuit.org",
    userId: 24601
  },
  {
    name: "Senka",
    email: "Senka@pursuit.org",
    userId: 38217
  },
  {
    name: "Erika",
    email: "Erika@pursuit.org",
    userId: 18104
  },
  {
    name: "Evan",
    email: "Evan@pursuit.org",
    userId: 78293
  }
]

function forEachElem(arr, callback) {
  let output = [];
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // invoke our callback on each item of the array
    let callbackReturnVal = callback(arr[i])
    output.push(callbackReturnVal);
  }
  return output;
}

function captureName(user) {
  return user.name
}

// let namesArr = forEachElem(users, captureName)
// console.log(namesArr)


let sum5 = (x) => {
  return x + 5
}

let doMath = (y) => {
  return sum5
}

let res = doMath(10)(7)
console.log(res)

