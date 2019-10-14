- Anything we would like to review together from last lab
1900-1915 Intro to Strings 
  - What are some of the things we can do with strings?
  - Concatenating
  - Scape single quote inside singly quoted string 
  - \n, \r, \t characters
  - Ex. Take 5 mins and experiment with strings that have quotes and special characters inside.

1915-1945 String properties
  - What are some properties of this white board?
  - indices & .length 
  - [Ex]. Write your name and above it the indices for each of your letters. last write the length of your name
  - Last char
  - Adding to str variable
  - Methods. If it was a smart board we could say something like. Ok board, record!
    - toUpperCase()
    - toLowerCase()
  - [Ex]. explore W3 schools string methods

1945-2015 Immutability
  ```js
  let name = 'jane'
  name[0] = name[0].toUpperCase()
  console.log(name)
  ```
  - More methods
    - Slice
    - Split

  - Numbers to string
    - "I have " + 1 + 'cat'
    - toString()
    - The opposite
      - parseInt(str)
      - Number(str)
  - String interpolation with ``
    - ${}
    ```js
    for(let i = 1; i <= 5; i++){
    console.log(`I'm number ${i}!`)
    ```
}
