'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const popups = document.querySelectorAll('.popup__body');

popups.forEach((popup, index) => {
  popup.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('popup__body')) {
      window.location.hash = `#product-${index+1}`;
    }
  });  
});
