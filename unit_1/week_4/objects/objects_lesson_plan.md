# Vocabulary
  - objects
  - dot-notation
  - square brackets-notation
  - keys/values
  - properties
# Intro
  - Javascript is object oriented
    * the idea of encapsulating state and operations inside objects. Why?
    * Almost everything in JS is an object
  - key-value pairs
# Real world example
  - Apples 
    {type: 'Gala', color: 'red', ripeness: 'ripe', owner: 'Tomer'}
    {type: 'Gala', color: 'red', ripeness: 'ripe', owner: 'Tomer'}
    {type: 'Granny Smith', color: 'green', ripeness: 'unripe', owner: 'Daniel'}
    {type: 'Golden Delicious', color: 'yellow', ripeness: 'rotten', owner: 'Ashley'}
    {type: 'Honeycrisp', color: 'red', ripeness: 'ripe', owner: 'Maria'}
# Syntax  
  - Curly braces
  - pairs separated by commas
  - keys separated from values by colons
  - empty object {}

# Programming example
  - Maybe apples if its a shopping cart
  - Hotel reservation in a hotel app
  - [EX] User profile. Create an object that represents you.
      - firstName
      - secondName
      - dob
      - bio


# Getting & Setting Properties
  - How do we get a property?
    - dot-notation
    - square braket-notation
    -[EX] What happens if you try to get a prop that doesn't exist
       - Similar to when you key into an array index out of bounds?
  - Setting props
    - Like arrays, objects are mutable.
    - Access key and use Assignment opertor 
    - Set new a property
      - [EX]Set a prop that doesn't exists. What happens?

# Arrays vs Objects
        ```js
          let myArray = ['firstValue', 'secondValue'];
          console.log(myArray[0]); // Logs 'firstValue'

          let myObject = {0: 'firstValue', 1: 'secondValue'}
          console.log(myObject[0]); // Logs 'firstValue'
        ```
  - Drawback of arrays is no named props. Only indices
  - Drawback in object. No order

# Arrays of object
  * Send me the objects you created of yourself. GitHub repo
  * Log everyones name

# Objects in Objects
  let closet = {
   winter: { hands: "gloves",
             head: "beenie"
             }, 
   summer: { hands: "rings",
             head: "baseball cap"
             }
 }

# Iterating through objects
  - Iterating through an array is simple: we only need a loop of some kind that goes, for example, from 0 to array.length - 1, because you know those numbers are keys of the array.

But with an object, you don't know what those keys are. They may not be numbers, but instead may be firstName and age, as in the above examples.
  - for in
  - log keys
  - log keys followed by value

# Getting Objec keys and values
  - [EX] loop through object and add keys to array
  - [EX] loop through object and add values to array
  - Object.keys(cat)
  - Object.values(cat)





