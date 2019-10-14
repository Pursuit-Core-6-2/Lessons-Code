// // 1. Log the last element of an array.
// let abc = ['a', 'b', 'c', 'd', 'e'];
// console.log(abc[abc.length - 1])

// // 2. Change the first element of an array to the string "something else".
// abc[0] = "Something else"
// console.log(abc)

// // 3. Add "mango" to the end of a fruits array ["strawberry", "banana"].
// let fruits = ["strawberry", "banana"]
// fruits.push('mango')
// console.log(fruits)

// // 4. Add "blueberry" to the front of the same fruits array.
// fruits.unshift('blueberry')
// console.log(fruits)

// // 5. Remove the last element of the fruits array.
// fruits.pop()
// console.log(fruits)

// // 6. console.log the length of the fruits array.
// console.log(fruits.length)

// // 7. Remove the first element of the fruits array.
// fruits.shift()
// console.log(fruits)

// // 8. Join all the elements in the fruits array with a '$'.
// let fruitsJoined = fruits.join('$')
// console.log(fruitsJoined)


// // 9. Given two arrays, write code that logs the larger array.  If the arrays are the same length, log "They are the same size"
// let firstArr = [1,2,3]
// let secondArr = [1,5,2,4]
// if (firstArr.length > secondArr.length) {
//   console.log(firstArr)
// } else if (secondArr.length > firstArr.length) {
//   console.log(secondArr)
// } else {
//   console.log('They are the same length')
// }

// // 10. Given an array, log its middle element.  
// // If the middle of the array is between two elements, log both of them.

// let hasExactMiddleArr = [1]
// let hasNoExactMiddleArr = [1,4]
// let middleArr = hasNoExactMiddleArr;
// let middleIndex = Math.floor(middleArr.length / 2);
// if (middleArr.length % 2) {
//   console.log(middleArr[middleIndex])
// } else {
//   console.log(middleArr.slice(middleIndex - 1, middleIndex + 1).toString())
// }

// // 11. Write code that logs every value in an array using a for loop

// console.log('[11] ----------------------------------')
// let logMeOutFor = ["I", "am", "a", "happy", "array"]
// for(let i = 0; i < logMeOutFor.length; i++) {
//   console.log(logMeOutFor[i])
// }


// // 12. Write code that logs every value in an array using a while loop

// console.log('----------- [12] --------------')
// let logMeOutWhile = ["I", "am", "a", "happy", "array"]
// let i = 0;
// while (i < logMeOutWhile.length) {
//   console.log(logMeOutFor[i])
//   i++
// }

// console.log('-------------- [13] --------------')
// // 13. Write code that logs every value in an array using a for/of loop
// let logMeOutForOf = ["I", "am", "a", "happy", "array"]
// for(let val of logMeOutForOf) {
//   console.log(val)
// }

// // 14. Given an array of numbers, write code that logs the sum of all the numbers

// console.log('-------------- [14] --------------')
// let firstArrToSum = [1, 2, 3, 4, 5, 6]
// let firstSum = 0;
// for(let i = 0; i < firstArrToSum.length; i++) {
//   firstSum += firstArrToSum[i];
// }
// console.log(firstSum) //  21

// let secondArrToSum = [1, 2, 3, 4, 5, -6]
// let secondSum = 0;
// for(let val of secondArrToSum) {
//   secondSum += val
// }
// console.log(secondSum) //  9


// // 15. Given an array of numbers, write code that logs all the odd numbers

// console.log('-------------- [15] --------------')
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
// for(let val of evenAndOddArr) {
//   if (val % 2) {
//     console.log(val)
//   }
// }
// // 1, 5, 11, 99

// // 16. Given an array of numbers, write code that logs the sum of all the even numbers
// console.log('-------------- [16] --------------')
// let evenAndOddArrToSum = [1,5,2,3,11,4,6]
// let evensSum = 0
// for(let val of evenAndOddArrToSum) {
//   if (!(val % 2)) {
//     evensSum += val
//   }
// }
// console.log(evensSum) // 12

// // 17. Write code such that noDupeList has all the same numbers as dupeFriendlyList,
// // but has no more than one of each number.

// console.log('-------------- [17] --------------')
// let dupeFriendlyList = [4,2,6,2,2,6,4,9,2,1]
// let noDupeList = []

// for(let val of dupeFriendlyList) {
//   if(!noDupeList.includes(val)) {
//     noDupeList.push(val)
//   }
// }
// console.log(noDupeList) // noDupleList = [4, 2, 6, 9, 1]

// 18. Make an array that contains all elements that appear exactly once in someRepeatsAgain

console.log('-------------- [18] --------------')
// let someRepeatsAgain = [25,11,30,31,50,28,4,37,13,20,24,38,28,14,44,33,7,43,39,35,36,42,1,40,7,14,23,46,21,39,11,42,12,38,41,48,20,23,29,24,50,41,38,23,11,30,50,13,13,16,10,8,3,43,10,20,28,39,24,36,21,13,40,25,37,39,31,4,46,20,38,2,7,11,11,41,45,9,49,31,38,23,41,16,49,29,14,6,6,11,5,39,13,17,43,1,1,15,25]
// let uniques = []
// for(let i = 0; i < someRepeatsAgain.length; i++) {
//   let alone = true;
//   for(let j = 0; j < someRepeatsAgain.length; j++) {
//     // console.log(`${someRepeatsAgain[i]} === ${someRepeatsAgain[j]} => ${someRepeatsAgain[i] === someRepeatsAgain[j]}`)
//     if(i !== j && someRepeatsAgain[i] === someRepeatsAgain[j]) {
//       alone = false
//     }
//   }
//   if (alone) {
//     uniques.push(someRepeatsAgain[i])
//   }
// }
// console.log(uniques)
// [ 44,33,35,42,12,48,30,50,8,3,10,28,24,36,21,1000,40,37,4,46,20,2,7,45,9,31,38,23,41,16,49,29,14,6,11,5,39,13,17,43,1,15,25 ]

// // 19. Given an array of strings, find the the string with the most "a"s in it.
// console.log('-------------- [19] --------------')

// let mostAStrings = ["apes", "abba", "aaaaa", "apple"]
// let largestACount = 0;
// let strWithMostA = ''
// for(let i = 0; i < mostAStrings.length; i++) {
//   let aCount = 0;
//   let str = mostAStrings[i]
//   for(let j = 0; j < str.length; j++) {
//     if (str[j] === 'a') {
//       aCount++
//     }
//   }
//   if (aCount > largestACount) {
//     largestACount = aCount;
//     strWithMostA = str
//   }
// }
// console.log(strWithMostA)

// // 20. Find the second smallest number in an Array of Ints

// let secondSmallestArr = [11, 52, 10, 7, 50, 46, 79, 78, 13, 26, 83, 92, 89, 81, 1, 41, 4, 23, 57, 41, 80, 83, 41, 69]
let secondSmallestArr = [10, 20, 4, 50, 0, 1]
// let secondSmallestArr = [52, 7, 10, 1, 20, 4, 50]
let smallest = secondSmallestArr[0];
let secSmallest = secondSmallestArr[0];
for (let val of secondSmallestArr) {
  if (val < smallest) {
    secSmallest = smallest
    smallest = val
  } else if (val < secSmallest) {
    secSmallest = val
  }
}
console.log(secSmallest) // 4
