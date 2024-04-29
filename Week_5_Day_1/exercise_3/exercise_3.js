let currentAge = parseInt(prompt('Enter your current age:'));
let retirementAge = parseInt(prompt('Enter the age you want to retire:'));

function retirementCalculator(currentAge, retirementAge) {
	const currentYear = new Date().getFullYear();

	const yearsLeftToRetire = retirementAge - currentAge;
	const yearToRetire = currentYear + yearsLeftToRetire;

	if (retirementAge < currentAge) {
		return `The retirement age should be greater than the current age. 
    Please enter a valid retirement age.`;
	} else if (retirementAge === currentAge) {
		return 'Congrats! You can retire now!';
	} else {
		return `You have left ${yearsLeftToRetire} years until retirement 
    and you can retire in ${yearToRetire}`;
	}
}

console.log(retirementCalculator(currentAge, retirementAge));
