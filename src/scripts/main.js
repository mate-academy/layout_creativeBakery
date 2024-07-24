window.addEventListener('hashchange', (event) => {
  const footer = document.querySelector('footer'); // Замініть 'footer' на селектор вашого футера

  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    footer.style.display = 'none'; // Приховати футер
  } else {
    document.body.classList.remove('page__body--with-menu');
    footer.style.display = ''; // Відновити футер
  }
});
