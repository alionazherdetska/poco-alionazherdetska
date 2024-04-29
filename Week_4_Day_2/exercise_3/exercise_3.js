const outputDiv = document.getElementById('output');

for (let i = 0; i <= 20; i++) {
  const paragraph = document.createElement('p');

  let message;
  if (i % 2 === 0) {
    message = i + " is even";
  } else {
    message = i + " is odd";
  }
  paragraph.textContent = message;
  outputDiv.appendChild(paragraph);
}
