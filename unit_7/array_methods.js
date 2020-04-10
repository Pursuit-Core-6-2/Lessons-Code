let nums = [3, 2, 1, 4, 5, 0];

let logNum = (crrElem, index) => {
  console.log(index, crrElem)
}

// let forEachReturn = nums.forEach(logNum)
// console.log('forEachReturn', forEachReturn)
let doubleNum = (num) => {
  return num * 2
}

// let doubledArr = nums.map(doubleNum)
// console.log('mapReturn', doubledArr)
let isOdd = (num) => {
  // return num % 2 !== 0
  return 0;
}

// let oddNums = nums.filter(isOdd)
// console.log('oddNums', oddNums)

let addNums = (a, b) => {
  return a + b
}

let numsSum = nums.reduce((acc, num) => {
  let newAcc = acc + num
  console.log(acc, num, '=', newAcc);
  return newAcc
}, 0)

console.log('numsSum', numsSum)

let numObj = nums.reduce((acc, num, index) => {
  acc[num] = index
  return acc
}, {})

let oddNums2 = nums.reduce((acc, num) => {
  if (num % 2 !== 0) {
    acc.push(num)
  }
  return acc
}, [])
// console.log('oddNums2', oddNums2)

let allNums = nums.every(num => {
  return typeof num === 'number'
})
console.log('allNums', allNums)

let sorted = nums.sort((a, b) => {
  // console.log(a, b, nums)
  return b - a;
  // return a
})
// console.log('sorted', sorted)
// console.log('nums', nums)
// console.log('sorted === nums', sorted === nums)

let dog = { name: "Pluto" }
let arr = [1, { a: 'abc' }, true, null, dog, 0]

// console.log(arr.includes(true))
console.log(arr.includes(dog))
