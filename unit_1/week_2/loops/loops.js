// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// console.log(11);
// console.log(12);
// console.log(13);
// console.log(14);

//--
// let num = 2;
// while (num <= 20) {
//   console.log(num)
//   //num += 1
//   num += 2
// }

//
// let x = 100;
// while (x > 0){
//   x % 2 !== 0
//     ? console.log(x + "is odd")
//     : console.log(x + 'is even');
//   x -= 1;
// }

// let num = 20;
// while (num > 0) {
//     if (num % 2 !== 0) {
//       console.log(num + " is odd")
//     } else {
//       console.log(num + " is even")
//     }
//     num -= 1
//     console.log('this will run')
// }
// //
// console.log('-------------------')
// let x = 10;
// console.log('this is x: ' + x)

//   initialization //conditional  //increment or decrement
// for (var x = 20;    x > 0;        x -= 1) {
//   if (x % 2 !== 0) {
//     console.log(x + ' is odd')
//   } else {
//     console.log(x + ' is even')
//   }
// }
// console.log('this is x: ' + x)

// for (let y = 50; y > 0; y -= 5) {
//   // if (y % 5 === 0) {
//     console.log(y);
//   // }
// }
// let string = ''
// for (let num = 10; num > 0; num -= 1) {
//   if (num % 2 === 0) {
//     string += '('
//     // console.log(string)
//   } else {
//     string += ')'
//   }
// }
// console.log(string)


//| num | num > 0 | num % 2 === 0 | string         |
//| 10  |  true   |    true       | "("
//| 9   |  true   |    false      | "()"
//| 8   |  true   |    true       | "()("


// let num = 8
// if (num % 2 !== 0) {
//   console.log(num + " is odd")
// } else {
//   console.log(num + " is even")
// }
// num -= 1
// console.log('num now ' + num)


// for(let x = 1; x <= 100; x++) {
//   if (x % 3 === 0 && x % 5 === 0) {
//     console.log('FizzBuzz')
//   } else if (x % 3 === 0) {
//     console.log('Fizz')
//   } else if(x % 5 === 0) {
//     console.log('Buzz')
//   } else {
//     console.log(x)
//   }
// }

// let n = 3;
// let string = '';
// for (let i = 0; i < n; i++) {
//   string += "*"
// }
// | i | string |
// | 0 | "*"
// | 1 | "**"
// | 2 | "***"
// | 3 |
// string = "***"
// string = "****"
// string = "*****"

// for (let j = 0; j < n; j++) {
//   console.log(string)
//   string += "*"
// }

// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     };
// };
//
// for (let i = 60; i <= 100; i++) {
//   console.log(i + " - " + assignGrade(i))
// }

//5
//15
//25
//35
//45
//55

// for (let i = 5; i <= 100; i += 10) {
//   console.log(i)
// }
