# Exit ticket tests
  - Methods and their definition/function/use cases
  - Which array methods go trough the entire arr
  - Expected output of a .map
  - Expected output and syntax of a .reduce
# Array Methods Lesson Plan
  * 1800-1830 Intro 
    - Revisit what a callback is.
    - We Created forEach(arr, callback)
      * Using loops, callbacks and arrays is very common.
  * .forEach
    - Our for each function of the callbacks lab
    - [1,2,3].forEach()
      * Parameters & Return Value
      * Could be used for creating an html list 
      * Mostly for side effects
    - [Q] Given that for loop vs .forEach produce the same result why would we want to use .forEach()
      * Save our time
      * Expressiveness
    - Callback Params
      * Params
        * currentElement
        * index
      * Return Value
      * A good use for the index will be for making an html list to color every other element of the list making the list more readable. 
    - [EX] using .forEach write a callback that logs the element followed by its type.
  * Array Transformation
    - To transform one array into another, we apply a function to each item in the array and collect the results into a new array.
    - Most array transformations share two operations in common:
      * The traverse the source array.
      * Add each item's transformed value to a new array.
    - [Example] using .forEach to transform films array using global var
  * .map()
    - Great for array transformations 1:1
      * Transform the elements, not the array.
      * Sifting part of elements. Films array example 
      * Taking every element as input for a transformation
    - Params & Return Value
      - Callback dictates the transformation. Applied to every elem
        - cb params and return val
      - Mapped array
    - Parallel with Coin Tracing on paper
    - Transformation done with .forEach now in .map
      - Why? No side effects
    - [EX] Given an array of numbers map it to an array of the string representation of the numbers. Change it's type
  * .filter()
    - Still transformation
      * Not a transformation of the elements but of the array
    - When you want a subset of the elements in the array that meet a condition. Pass a test
    - Params & Return Value
      - Callback dictates the what we filter out. Applied to every elem
        - cb params and return bool
      - Filtered array
    - [Example] Filtering using .forEach for movies with rating == 5.0
      - Side effects?
    - [Example] Filtering for even nums with .filter
    - Method chaining. Filter movie.rating == 5.0 and then mapping to only ids
  * .reduce()
    - Reduce an array to a single value. Find a single value in the array
    - Params & Return Value
      - Callback dictates how we reduce/find to a single value. Applied to every elem
        - cb params:acc, elem & return val: new accumulator
      - Reduced value array
      - Optional initial value, accumulator
    - [Examples]
      - Largest num of array
      - Sum of all the nums. With walk trough
      - Sum of all the nums, starting at 5. With walk trough
      - Sum of all even nums only
      const cities = [
        {
          city: "Chongqing",
          population: 30165500
        },
        {
          city: "Shanghai",
          population: 24183300
        },
        {
          city: "Beijing",
          population: 21707000
        },
        {
          city: "Lagos",
          population: 16060303
        }
      ]
      const totalPopulation = cities.reduce(
        (sum, city) => sum + city.population,
        0
      );
    - [Example] Chaining
      * sumOfSquares
  * .every()
    - Check to see if every/all elements pass the test provided by the callback
    - Params & Return Value
      - Callback that tests. Applied to every elem
        - cb params and return val: bool
      - Boolean whether or not all elements passed the test
    - Allow you to answer questions like
      * Are all elements in this array greater than 5
      * Do all cities have a population > 10000
      * Do all the users have a profile pic
    // Todo
    * More real world use cases .map
    * Parallels and analogies 
