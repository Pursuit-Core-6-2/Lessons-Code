// let pluto = {
//   name: 'Pluto',
//   breed: 'Cartoon',
//   bark: () => {
//     console.log('Woof!!')
//   },
//   getFullName: function() {
//     console.log(`${this.name} ${this.breed}`)
//   },
//   bite: function (who) {
//     console.log(`Rwarr!! ${this.name} bites ${who}`)
//   }
// }

// let tom = {
//   name: 'Tom',
//   breed: 'Cartoon',
//   bark: () => {
//     console.log('Woof!!')
//   },
//   getFullName: function() {
//     console.log(`${this.name} ${this.breed}`)
//   },
//   bite: function (who) {
//     console.log(`Rwarr!! ${this.name} bites ${who}`)
//   }
// }

// dog.color = 'Orange'
// dog.salute = function() {
//   console.log("Hello")
// }

// dog.bark();
// dog.bite('Alejo');
// dog.getFullName(); // "Pluto Cartoon"
// console.log(dog)
// dog.salute();
const cp = require('child_process')

function Dog(name, breed) {
  this.name = name;
  this.breed = breed
  // this.bark = function() {
  //   console.log('This is bark in the instance')
  // }
}

Dog.prototype.bark = function() {
  console.log(`${this.name} Woof!!`)
}

let pluto = new Dog('Pluto', 'Cartoon')
let tom = new Dog('Tom', 'Golden Retriever')
let mojo = new Dog('Mojo', 'Brittany Spaniel')

tom.bark = function () {
  console.log('Wuuf!')
}

// console.log(pluto)
// pluto.bark();
// console.log(tom)
// tom.bark();
// console.log(mojo)
// mojo.bark();

console.log(pluto instanceof Object)
// console.log(Dog.prototype === pluto.__proto__)
// tom.bark()
// mojo.bark()
