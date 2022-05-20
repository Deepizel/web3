const datestamp = document.querySelector('.timein');
const form = document.querySelector('inputform');

form.addEventListener('on submit', e => {
    e.preventDefault();
});

// date functionality
const now = new Date();
datestamp.innerText = now.toDateString();

//pricing
const priceStamp = document.querySelector('.autopricing');
const priceSelect = document.querySelector(".slotno input");

function pricing(){
    if (priceSelect.value.length <= 10) {
        console.log('small car');
    }
}

priceSelect.addEventListener('onChange', e => {
    e.preventDefault();
    pricing();
});