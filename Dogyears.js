//A variable of my age.
let myAge = 31;
//A mutable variable.
let earlyYears = 2;
earlyYears *= 10.5;
//Create a new mutable variable below:
let laterYears = myAge - 2
//multiply laterYears variable by 4:
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//Add earlyYears and laterYears together:
let myAgeInDogYears = earlyYears + laterYears;
//Myname in lowercase:
let myName = 'Martin'.toLowerCase();
//Example of string string interpolation.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears}.`)
