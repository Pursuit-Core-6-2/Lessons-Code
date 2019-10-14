let fellows = [
  {
    firstName: 'Alejandro',
    lastName: 'Franco',
    dob: '17/08/1995',
    bio: 'Full Stack Web Development Instructor'
  }, 
  {
    firstName: 'Stephanie',
    lastName: 'Ramirez',
    age: '25',
    dob: '09/14/1993',
    bio: 'I am a very friendly and fun person who enjoys learning new things'
  }, 
  {
    firstName: "Camille",
    lastName: "Jessamy",
    dateOfBirth: "02/07/1987",
    bio: "6.2 Web cohort and lover of plants and burritos."
  }, 
  {
    firstName: 'deja',
    lastName: 'flynn',
    hair: 'blonde',
    skin: 'medium',
    height: 'short',
    hometown: 'BROOKLYN',
    dob: '3/12/198*',
    bio: 'Full stack 6.2 fellows single mom of 1 that loves pinacoladas and getting caught in the rain ',
  }, 
  {
    firstName: "Ohidur",
    lastName: "Rahman",
    dob: '07/13/96',
    bio: "Im wavey."
  }, 
  {
    firstName: 'Pearl',
    lastName: 'Jean-Pierre',
    bio: 'Dog lover and Libra'
  }, 
  {
    firstName: "Sharrar",
    lastName: "Khan",
    DateOfBirth: "mm/dd/yyyy",
    Bio: "Bio",
  }
]

// console.log(fellows)

for (let i = 0; i < fellows.length; i++) {
  // fellows[i].language = 'JS'
  fellows[i].language = 'JS'
}

let closet = {
  winter: { 
    hands: "gloves",
    head: "beenie",
  },
  summer: { 
    hands: "rings",
    head: "baseball cap"
  }
}

// Object aka.
// Map
// Dictionary
// Hash map
// Hash table


let myClosetKeys = [];
for (let key in closet) {

}
console.log(myClosetKeys)

let closetKeys = Object.keys(closet)
console.log(closetKeys)

console.log('---')

let myClosetValues = [];
//for loop

console.log(myClosetValues)
let closetValues = Object.values(closet)
console.log(closetValues)


// winter:
//   - hands: gloves
//   - head: beenie
// summer:
//   - hands: rings
//   - head: cap
