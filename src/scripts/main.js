'use strict';

const formBakershop = document.querySelector('.bakershops__form');
const formContactUs = document.querySelector('.contact-us__form');

formBakershop.addEventListener('submit', handleEventBakersop);

formContactUs.addEventListener('submit', handleEventContactUs);

function handleEventBakersop(event) {
  event.preventDefault();
  formBakershop.reset();
}

function handleEventContactUs(event) {
  event.preventDefault();
  formContactUs.reset();
}
