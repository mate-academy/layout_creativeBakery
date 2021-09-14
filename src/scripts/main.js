'use strict';

const header = document.querySelector('.header');
const slides = document.querySelectorAll('.slide');
const numbers = document.querySelectorAll('.number');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let activeSlide = 0;
let activeNum = 0;

next.addEventListener('click', () => {
  activeSlide++;
  activeNum++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  if (activeNum > numbers.length - 1) {
    activeNum = 0;
  }

  setInitialBg();
  setActiveSlide();
});

prev.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  if (activeNum < 0) {
    activeNum = numbers.length - 1;
  }

  setInitialBg();
  setActiveSlide();
});

setInitialBg();

function setInitialBg() {
  header.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  numbers.forEach(number => {
    number.classList.remove('active-p');
  });

  slides[activeSlide].classList.add('active');

  numbers[activeSlide].classList.add('active-p');
}
