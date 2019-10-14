let birthYear = 1995;
let futureYear = 2050;
let ageMin =  futureYear - birthYear;
let ageMax =  ageMin - 1;
console.log('I will either be ' + ageMin + ' or ' + ageMax + ' in ' + futureYear);

// Snack supply calculator
let crrAge = 23;
let maxAge = 50;
let snackDay = 1;
let favSanck = 'Peanuts';
let snackYear = snackDay * 365;
let totalSnack = snackYear * (maxAge - crrAge);
console.log('You will need ' + totalSnack + ' of ' + favSanck + ' to last you until the age of ' + maxAge); 

//Properties of a circle
let radius = 7
let diameter = radius * 2
let circumference = Math.PI * diameter 
let area = Math.PI * radius * radius
console.log('The circumference is: ' + circumference);
console.log('The area is: ' + area);

// Temperature converter
let c = 0;
let cInF = (c * 1.8) + 32;
let f = 32;
let fInC = (f - 32) / 1.8;
console.log(`C = ${c} into F is: ${cInF} ---- F = ${f} into C is: ${fInC}`)
