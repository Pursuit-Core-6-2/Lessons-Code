// function User(name, userId) {
//   this.name = name
//   this.userId = userId
// }

// let userOne = new User("Anne", 6021)
// let userTwo = new User("Ben", 6022)
// let userThree = new User("Cal", 6023)
// let userFour = new User("Dan", 6024)
// let users = [userOne, userTwo, userThree, userFour]

// users.push(new User('Alejo', 6025))
// users.push(new User('Alejo', 6025))
// console.log(users) //[ 6021, 6022, 6023, 6024 ]


// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.talk = function() {
//   console.log('Blah blah')
// }

//////////////////
class Animal {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  sleep() {
    console.log(`${this.name} is sleeping`)
  }

  static isAnimal(value) {
    return value instanceof Animal
  }
}

class Human extends Animal {
  constructor(name, gender, spokenLanguage, favMovie) {
    super(name, gender)
    this.spokenLanguage = spokenLanguage;
    this.favMovie = favMovie;
    this.money = 0
  }

  earnMoney() {
    this.money++
    console.log(`${this.name} earned money. Now he/she has $${this.money}`)
  }
}

console.log(Human.isAnimal(corey))

let corey = new Human('Corey', 'male', 'english', 'Jurassic Park')
corey.sleep()
corey.earnMoney()
corey.earnMoney()
corey.earnMoney()

let dog = new Animal('Pluto', 'male')
// console.log(corey.money)
console.log('Human.isAnimal() =>', Human.isAnimal(corey))








