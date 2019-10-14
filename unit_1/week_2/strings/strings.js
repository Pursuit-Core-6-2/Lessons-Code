
// let str = "###A&###" //Concatenating
// console.log(str.length)


// Last char is at index str.length - 1
// let middleIndex = Math.floor(str.length / 2);
// if (str[middleIndex] === 'A') {
//   console.log('That\'s  is not allowed')
// } else {
//   console.log('You can tweet')
// }

let str = ''
for (let i = 1; i <= 5; i++) {
  if (i !== 5) {
    // str += i + ","
    str += `${i},`
  } else {
    str += i
  }
}

let name = 'alejo'
let msg = `Welcome`

console.log(msg + " " + name)
console.log(`${msg} ${name}`)

// // str = ''
//| i | i <= 5 | i !== 5 |str
//\ 1 |  true  |    t    |"1,"
//| 2 |  true  |    t    |"1," + "2," => "1,2,"
//| 3 |  t     |    t    |"1,2," + "3," => "1,2,3"
//| 4 |  t     |    t    |"1,2,3" + "4," => "1,2,3,4"
//| 5 |  t     |    f    |"1,2,3,4" + "5" => "1,2,3,4,5"
console.log(str)


// let name = "aleJo"
// let upperCased = name.toUpperCase()
// console.log('upperCased: '+ upperCased)
//
// let lowerCased = upperCased.toLowerCase();
// console.log('lowerCased: '+ lowerCased)

// let message = "Welcome"
// let user = "alejo"
// user[0] = 'A'
//
// console.log(message + user)
//
// let name = "alejo";
// name = name[0].toUpperCase() + name.slice(1);
// console.log(name);

// let str = 'The quick brown fox jumps over the lazy dog.';
// let latterHalf = str.slice(31)
// let earlierHalf = str.slice(0)
// console.log(latterHalf);
// console.log(earlierHalf)

// expected output: "the lazy dog."
