# Exit Ticket tests
* Function as value to object property
* Function accessing `this` keyword
* Constructor function calling with `new` keyword
* Functions are added to the function prototype not to contructor function. `User.prototype.logDescription()` not  `User.logDescription`
* Methods added to prototype are called in the instance not in the constructor. `user.logDescription()` not `User.logDescription()`
* Template literals

# Constructor Functions

* Functions as object properties values
    * dog object with talk method.
    * [Example] console.log()

* `this` keyword inside an object method
    * dog.getFullName()
    * we cannot just say `firstName` and `lastName` because they do not exist on their own. They are properties of the `dog` object and since we are referring to them inside the dog object we use `this`

* Adding functions as values after object was created
    ```JS
    let dog = {}
    dog.getBreed = () => {return this.breed}
    ```

* Constructor Function Motivation
  - Creating multiple objects that represent the same kind data (with the same structure) (properties and methods)
  - [Example] Building an app for a Dog's shelter
    - Old way. If a new dog arrives I have to go into my code and manually create a new object that represents the new dog and then add it to the dogs' array
    - New Way. Use a constructor function

* Constructor function anatomy
    * function Dog()
    * Breakdown and walk through
  While a constructor function looks like a regular function, note the following:
    1. Each arguments is assigned to a property of the `this` object.
    2. The function does not have a `return` keyword.
    3. The function returns the `this` object.

  Also, note the following conventions:
    1. Constructor functions start with a **capital first letter**.
    2. Parameter/argument names match the **keys** (property names) of the object we will create.

* Using constructor functions
    `let mojo = new Dog("Mojo", "Brittany Spaniel", 45)`
    - `new` keyword

* What if our objects have a common behavior?. Solution = Prototype
    * What if our objects have a common behavior? We don't want to repeat ourselves. Use more memory where every object has its own copy.
    * An object instance will always inherit from it's constructor function prototype. It is linked to it's prototype
    * dog.talk() what if we want to change the method of all the dogs that are already created?
    * We want to put unique properties in the instance and common shared behavior in the prototype
    * `ConstructorFn.prototype === instance.__proto__`
    * This is why we have `Array.prototype.filter` so that all arrays can have a filter method
    * Properties & methods that are not in the instance are then looked up in the instance prototype



## Questions
* Why would I want to use a constructor function when I can have a function that returns objects.
  - You loose the positivity of using instanceof
  - You loose the prototype inheritance

* When would you decide to add a method to the prototype vs the instance itself 
  - It is generally better to attach the method to the prototype if the method contains logic that all the instances will share. Saves memory and you only need to change the logic in one place if needed to.
  - A method in the prototype will regardless of when it is added will allways be available to all instances
  When having a method in the object instance that means every instance has it's own independant method and if we need to change the logic of that methods we will need to change it in all precreated intances
  - 
* Can the prototype besides having methods also have properties?
