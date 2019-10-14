//1. Write a while loop and a for loop that takes the variable "num" and logs all the numbers, descending, between "num" and 1.
let num = 10;
while (num > 0) {
    console.log(num)
    num -= 1;
}

for(let num = 10; num > 0; num--) {
    console.log(num)
}

console.log('1-------------2')
//2. Write a while loop and a for loop that takes the variable "num", and iterates over all numbers from 0 to "num". For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")
let i = 0;
let max = 10;
while (i < max) {
    if (i % 2) {
        console.log(i + ' is odd')
    } else {
        console.log(i + ' is even')
    }
    i++;
}

for(let i = 0; i < max; i++) {
    if (i % 2) {
        console.log(i + ' is odd')
    } else {
        console.log(i + ' is even')
    }
}

console.log('2 ------------- 3')
//3. Write a while loop and a for loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18"). Bonus think of another way to solve it.
let j = 0;
let x = 10;
while (j < x) {
    console.log(j * 9)
    j++;
}

for(let j = 0; j < x; j++) {
    console.log(j * 9)
}

console.log('3 ------------- 4')
//4. Write code that prints/logs all the numbers that end in a 5 from 1 to 100, exclusive.
for (let i = 5; i <= 100; i+=10) {
    console.log(i)
}

console.log('4 ------------- 5')
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "FizzBuzz")
    } else if (i % 3 === 0) {
        console.log(i, "Fizz")
    } else if (i % 5 === 0) {
        console.log(i, "Buzz")
    } else {
        console.log(i)
    }
}

// Another version
for (let i = 1; i <= 100; i++) {
    let out = i;
    if (i % 3 === 0) {
        out = 'Fizz'
    } 
    
    if (i % 5 === 0) {
        if (out === 'Fizz') {
            out += 'Buzz'
        } else {
            out = 'Buzz'
        }
    } 
    console.log(out)
}

// Bonus
// 1. Write a program that would log the lyrics of the song 99 Bottles of Beer. This is the first verse of the song:
for (let i = 99; i >= 1; i--) {
    let noun = 'bottles'
    let bOfBeer = noun + " of beer"
    if(i == 1) {
        noun = 'bottle'
    }
    console.log(i + " " + bOfBeer + ", " + i + "")
}