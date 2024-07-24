window.addEventListener('hashchange', (event) => {
  const footer = document.querySelector('footer');

  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    footer.style.display = 'none'; 
  } else {
    document.body.classList.remove('page__body--with-menu');
    footer.style.display = '';
  }
});
