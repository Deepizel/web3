const datestamp = document.querySelector('.timein');

// date functionality
const now = new Date();
datestamp.innerText = now.toDateString();
