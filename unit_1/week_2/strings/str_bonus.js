let vowelCheck = 'aPursuit';
//let vowelCheck = 'Prst';
vowelCheck = vowelCheck.toLowerCase();
switch (vowelCheck.search("a") > 0 || 
    vowelCheck.search("e") > 0 ||
    vowelCheck.search("i") > 0 ||
    vowelCheck.search("o") > 0 ||
    vowelCheck.search("u") > 0) {
    case true:
        console.log(`${vowelCheck} has a vowel`);
        break;
    default:
        console.log(`${vowelCheck} has no vowels`);
}


//let vowelCheck = 'Prst';
vowelCheck = vowelCheck.toLowerCase();
switch (vowelCheck.search(/[aeiou]/)) {
    case -1:
        console.log(`${vowelCheck} has no vowels`);
        break;
    default:
        console.log(`${vowelCheck} has a vowel`);
}
