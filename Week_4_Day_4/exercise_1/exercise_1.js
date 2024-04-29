// Translate days of the week

let day = prompt('Write the day');
let translatedDay;

switch (day) {
	case 'Monday':
		translatedDay = 'Monntag';
		break;
	case 'Tuesday':
		translatedDay = 'Dienstag';
		break;
	case 'Wednesday':
		translatedDay = 'Mittwoch';
		break;
	case 'Thursday':
		translatedDay = 'Donnerstag';
		break;
	case 'Friday':
		translatedDay = 'Freitag';
		break;
	case 'Saturday':
		translatedDay = 'Samstag';
		break;
	case 'Sonntag':
		translatedDay = 'Samstag';
		break;
}

console.log(translatedDay)
