'use strict';
const learnButton = document.querySelector('.header__button');
const orderButtons = document.querySelectorAll('.product-card__button')

learnButton.addEventListener('click', () => {
  document.getElementById('about-us').scrollIntoView({ behavior: "smooth" });
});

orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: "smooth" });
  })
});
