let number1 = parseFloat(prompt('Enter the first number:'));
let number2 = parseFloat(prompt('Enter the second number:'));

if (number1 === number2) {
  console.log('The numbers are equal');
} else {
  let biggerNumber = Math.max(number1, number2);
  let smallerNumber = Math.min(number1, number2);
  console.log(`The greater number of ${number1} and ${number2} is ${biggerNumber}`);
  console.log(`The smaller number of ${number1} and ${number2} is ${smallerNumber}`);
}
