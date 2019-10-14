// 6. Create a verbing code block. It should take a single string variable.
//If its length is at least 3, it should add 'ing' to its end, unless it already
// ends in 'ing', in which case it should add 'ly' instead. If the string length is
//less than 3, it should leave it unchanged. For example:
// verbing('box')
// => 'boxing'
// verbing('train')
// => 'training'
// verbing('swimming')
// =>  'swimmingly'
// verbing('go')
// =>  'go'

let verb = 'run' // => 'walking'

// 1st case verb already ends in 'ing'
// then append 'ly' at the end

// 2nd case verb.length > 3. Doesn't end in already 'ing'
// append 'ing' at the end

// 3rd case verb.length < 3. Console.log verb unchanged

// if (verb.endsWith('ing') === true) {
if (verb.endsWith('ing')) {
  console.log(`${verb}ly`)
} else if (verb.length >= 3) {
  // console.log(verb + 'ing')
  console.log(`${verb}ing`)
} else {
  console.log(verb)
}
