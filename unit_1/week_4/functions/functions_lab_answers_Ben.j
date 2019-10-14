function q1(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

console.log("Q1")
console.log(q1(12,4) === 12)

function q2(age) {
    return age * 7
}

console.log("Q2")
console.log(q2(4) === 28)


function q3(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log("Q3")
console.log(q3([13,2,4,-2]) === 17)

function q4(num1, num2) {
    return num1 + num2
}

console.log("Q4")
console.log(q4(14,5) === 19)


function q5(numberGrade) {
    if (numberGrade === 100) {
        return "A+"
    } else if (numberGrade >= 90) {
        return "A"
    } else if (numberGrade >= 80) {
        return "B"
    } else if (numberGrade >= 70) {
        return "C"
    } else if (numberGrade >= 65) {
        return "D"
    } else {
        return "F"
    }
}

console.log("Q5")
console.log(q5(88) === "B")

function q6(message, count) {
    let repeatedStr = ""
    for (i = 0; i < count; i++) {
        repeatedStr += message
    }
    console.log(repeatedStr)
    return repeatedStr
}

console.log("Q6")
console.log(q6("+",10) === "++++++++++")

function q7(num) {
    let arr = []
    for (i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr
}

console.log("Q7")
console.log(JSON.stringify(q7(3)) === JSON.stringify([1,2,3]))

function q8(x) {
    for (i = 0; i < x; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

console.log("Q8")
console.log(q8(40))

function q9(arr) {
    let reversedArr = []
    for (let i = arr.length - 1; i >= 0; i --) {
        reversedArr.push(arr[i])
    }
    return reversedArr
}

console.log("Q9")
console.log(JSON.stringify(q9([1,2,3])) === JSON.stringify([3,2,1]))

function q10(arr) {
    let frequencyObj = {}
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (frequencyObj[element] === undefined) {
            frequencyObj[element] = 1
        } else {
            frequencyObj[element] = frequencyObj[element] + 1
        }
    }
    let mostFrequentNum = NaN
    let mostFrequentNumCount = 0
    for (let key in frequencyObj) {
        if (frequencyObj[key] > mostFrequentNumCount) {
            mostFrequentNum = key
            mostFrequentNumCount = frequencyObj[key]
        }
    }
    return mostFrequentNum
}

console.log("Q10")
console.log(q10([2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]) == 2)

function q11(arr) {
    let sum = 0
    for (let element of arr) {
        if (element % 2 === 0) {
            sum += element
        }
    }
    return sum
}

console.log("Q11")
console.log(q11([1,2,5,64,23,22,91,3]) === 88)

function q12(obj) {
    let flippedObj = {}
    for (let key in obj) {
        let value = obj[key]
        flippedObj[value] = key
    }
    return flippedObj
}

console.log("Q12")
console.log((q12( {1: "uno", 5: "cinco"} )["uno"] == 1) && q12({1: "uno", 5: "cinco"})["cinco"] == 5)

function q13(arr, target) {
    for (let value of arr) {
        if (value === target) {
            return true
        }
    }
    return false
}

console.log("Q13")
console.log(q13([1,4,6,9,10], 5) === false)
