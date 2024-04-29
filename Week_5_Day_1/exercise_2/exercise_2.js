let langCode = prompt('Enter the language code:');
let message;

function helloWorld(langCode) {
	switch (langCode) {
		case 'es':
			return "Hola mundo!";
		case 'de':
			return "Hallo Welt!";
		default:
			return "Hello World!";
	}
}

console.log(helloWorld(langCode));
