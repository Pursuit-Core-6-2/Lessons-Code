//You are given an array of objects. 
//Each object in the array contains exactly 2 keys “firstName” and “lastName”
let people = [
  {
      "firstName": "Calvin",
      "lastName": "Newton"
  },
  {
      "firstName": "Garry",
      "lastName": "Mckenzie"
  },
  {
      "firstName": "Leah",
      "lastName": "Rivera"
  },
  {
      "firstName": "Sonja",
      "lastName": "Moreno"
  },
  {
      "firstName": "Noel",
      "lastName": "Bowen"
  }
]

// a. Create an array of strings called firstNames that contains only the values 
// for “firstName” from each object. 
// => ["Calvin", "Garry", "Leah", ....]

//b. Create an array of strings called fullNames that contains the values 
//for “firstName” and “lastName” from the object separated by a space.
// ["Calvin Newton", "Garry Mckenzie", ...]

// let firstNames = [];
// let fullNames = [];
// for (i = 0; i < people.length; i++) {
//   firstNames.push(people[i].firstName);
//   fullNames.push(people[i].firstName + ' ' + people[i].lastName)
// }
// console.log(firstNames);
// console.log(fullNames);

//#7
// Print the second most common letter in the string below:
let obj2 = {
  // W: 1,
  // e: 2,
  // r: 1,
  // e: 100
}

// Iterating over the string. To get individual chars
// Check current char to see if it's a key in obj2
//  -> if it's not then 
//    -> create a key with the currChar in obj2 
//    -> and set the value to one. Meaning we have seen the char
//  -> Otherwise 
//    -> increase the value that the key (currChar) is holding
// 
// 

let str = `We're flooding people with information.
We need to feed it through a processor. 
A human must turn information into intelligence or knowledge.
We've tended to forget that no computer will ever ask a new question.`

str = str.toLocaleLowerCase()

let obj = {
  //crrChar: 4
}
// let arrStr = str.split('') //not necessary

for (let i = 0; i < str.length; i++) {
  let crrChar = str[i]
  if ( crrChar !== ' ' 
    && crrChar !== '.' 
    && crrChar !== '\n'
    && crrChar !== '\''
  ) {
    if (obj[crrChar] === undefined) {
      obj[crrChar] = 1;
    } else {
      obj[crrChar]++;
    }
  }
}


obj['c'] = 30;
console.log(obj)

let mostComm;
let mostCommCount = 0;

let secMostComm; 
let secMostCommCount = 0; 
for (let char in obj) {
  if (obj[char] > mostCommCount) {
    secMostCommCount = mostCommCount
    secMostComm = mostComm

    mostComm = char
    mostCommCount = obj[char]
  } else if (obj[char] > secMostCommCount) {
    //secMostCommCount < mostCommCount) {
    console.log(`${mostComm}: ${mostCommCount} | ${secMostComm}: ${secMostCommCount} `)
           
    secMostCommCount = obj[char];
    secMostComm = char

    console.log(`=> ${mostComm}: ${mostCommCount} | ${secMostComm}: ${secMostCommCount} `)
  }
}

console.log(mostComm)
console.log(mostCommCount)
console.log('===============')
console.log(secMostComm)
console.log(secMostCommCount)

// for(let char of str)

