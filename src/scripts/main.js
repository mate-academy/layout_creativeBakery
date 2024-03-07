'use strict';

window.addEventListener('hashchange', () => {
  const targetId = window.location.hash.substring(1);

  if (targetId === 'menu') {
    document.body.classList.add('page__body--menu--open');
  } else {
    document.body.classList.remove('page__body--menu--open');
  }
});
