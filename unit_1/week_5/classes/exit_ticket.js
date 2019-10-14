// What will happen when the code below is run?
// class Post {
//   constructor(userName, message) {
//    this.userName = userName
//    this.message = message
//   }
// }
 
// let myPost = new Post("randomUser01", "First!")
// console.log(myPost.message)

// - It will log "First!" to the console	
// - It will log "message" to the console, 
// - It will give a syntax error because there shouldn't be the keyword "new" 
// before "constructor" 
// - It will give a syntax error because there shouldn't be the keyword "new" 
// before "Post" 


// Which of the code blocks below will log the following to the console:
// First!
//
// ~~~randomUser01

// A
// class Post {
//   constructor(userName, message) {
//    this.userName = userName
//    this.message = message
//    this.money = 0
//   }
//   logDescription() {
//    console.log(this.message)
//    console.log("")
//    console.log("~~~" + this.userName)
//   }
//  }
 
//  let myPost = new Post("randomUser01", "First!")
//  myPost.logDescription()
 
//  C
//  class Post {
//   constructor() {
//    userName = name
//    message = "First!"
//   }
//   logDescription() {
//    console.log(this.message)
//    console.log("")
//    console.log("~~~" + this.userName)
//   }
//  }
 
// let myPost = new Post()
// myPost.logDescription()
 
//  D
//  class Post { 
//   constructor() { 
//    userName = "randomUser01" 
//    message = "First!" 
//   } 
//   logDescription() { 
//    console.log(this.message) 
//    console.log("") 
//    console.log("~~~" + this.userName) 
//   }
//  }
 
//  let myPost = new Post()
//  myPost.logDescription()

///////////////////////////////////
// What will happen when the code block below is run?

class Square {
  constructor(sideLength) {
    this.sideLength = sideLength
  }
  static numberOfSides() {
    return 4
  }
}

let mySquare = new Square(5)
console.log(mySquare.numberOfSides)

// - It will log 4 to the console
// - It will log 5 to the console
// - It will cause a syntax error because the keyword "new" doesn't appear before "static"
// - It will log "undefined" to the console because numberOfSides is not defined 
// for an instance of Square
// - It will log "undefined" to the console because numberOfSides needs to have 
// an argument passed into it


/////////////////////////////////////////
// What will happen when the code block below is run?
class User {
 constructor(name) {
  this.name = name
  this.hasAdminStatus = false
 }
 deleteAllDatabases() {
  if (this.hasAdminStatus) {
   console.log("Deleted!")
  } else {
   console.log("You don't have admin status")
  }
 }
}

class SuperUser extends User {
 constructor(name) {
  super(name)
  this.hasAdminStatus = true
 }
}

let user = new SuperUser("Lex Murphy")
user.deleteAllDatabases()

// - It will log "Deleted!" to the console
// - It will log "You don't have admin status" to the console
// - It will log "undefined" to the console
// - It will cause a syntax error because "hasAdminStatus" can't be overwritten 
// by the SuperUser class
// - It will cause a syntax error because SuperUser shouldn't have the "new" 
// keyword before it
