// Say hello
let userName = prompt("What's your name?");
console.log('Hello, ' + userName + '!');

// Counting the number of characters
let inputString = prompt("Enter a string");
let numberOfCharacters = inputString.length;
console.log("Input string is: " + inputString + " and number of characters is: " + numberOfCharacters);

// Printing quotes
let quote = prompt("Enter a quote");
let author = prompt("Enter an author");
console.log(author + " says, '" + quote + "'");

// Fortune teller
let numberOfChildren = prompt("Enter number of children");
let partnerName = prompt("Enter partner's name");
let location = prompt("Enter a location");
let jobTitle = prompt("Enter a job title");
console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numberOfChildren + " kids.");

// Age calculator
let birthYear = prompt("Enter your birth year");
let futureYear = prompt("Enter a future year");

let age1 = futureYear - birthYear;
let age2 = age1 - 1;
console.log("I will be either " + age1 + " or " + age2 + " in " + futureYear);
