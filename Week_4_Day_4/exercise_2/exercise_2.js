let number = prompt('Write a number between 0 and 20');

while (true) {
    if (number.trim() === '') {
        alert('The field is empty. Please insert a number');
    } else if (isNaN(number.trim())) {
        alert('It is not a number. Insert a number, please.');
    } else {
        number = parseFloat(number.trim());
        if (number > 20) {
            alert("The number shouldn't be bigger than 20. Try again.");
        } else if (number < 0) {
            alert('The number should be bigger than 0. Try again.');
        } else {
            if (number % 2 === 0) {
                alert(number + ' is even');
            } else {
                alert(number + ' is odd');
            }
            break;
        }
    }
}
