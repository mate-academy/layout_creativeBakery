/* eslint-disable no-undef */
/* eslint-disable no-new */
'use strict';

const switchHeader = document.getElementById('header-switch');
const header = document.getElementById('header');
const allSlideSwitches = document.querySelectorAll('.slide-number');
const arrowUp = document.querySelector('.switch__arrow--up');
const arrowDown = document.querySelector('.switch__arrow--down');

const numSwitchHeaderImg = (e) => {
  const numbers = ['1', '2', '3'];

  numbers.forEach(el => {
    if (e.target.classList.contains(`slide-number--0${el}`)) {
      activeSlideNum(el);
    }
  });
};

const activeSlideNum = (num) => {
  header.classList = `header header--0${num}`;

  switch (num) {
    case '1':
      arrowDown.classList = 'switch__arrow--down switch__arrow';
      // eslint-disable-next-line max-len
      arrowUp.classList = 'switch__arrow--up switch__arrow--up--passive switch__arrow';
      break;

    case '2':
      arrowDown.classList = 'switch__arrow--down switch__arrow';
      arrowUp.classList = 'switch__arrow--up switch__arrow';
      break;

    case '3':
      arrowDown.classList = 'switch__arrow--down switch__arrow--down--passive'
        + ' switch__arrow';
      arrowUp.classList = 'switch__arrow--up switch__arrow';
      break;
  }

  [...allSlideSwitches].forEach(item => {
    (item.classList.contains(`slide-number--0${num}`))
      ? item.classList.add('slide-number__active')
      : item.classList.remove('slide-number__active');
  });
};

const arrowSwitchHeaderImg = (e) => {
  const activeSlide = [...allSlideSwitches].find(item =>
    item.classList.contains('slide-number__active')
  );

  if (e.target.classList.contains('switch__arrow--up')) {
    switch (activeSlide.innerText[1]) {
      case '3':
      case '2':
        activeSlideNum(`${activeSlide.innerText[1] - 1}`);
    }
  };

  if (e.target.classList.contains('switch__arrow--down')) {
    switch (activeSlide.innerText[1]) {
      case '1':
      case '2':
        activeSlideNum(`${+activeSlide.innerText[1] + 1}`);
    }
  }
};

switchHeader.addEventListener('click', (e) => {
  numSwitchHeaderImg(e);
  arrowSwitchHeaderImg(e);
});

new Swiper('.facts-swiper', {
  spaceBetween: 50,
  slidesPerView: 'auto',
  centeredSlides: true,
});
