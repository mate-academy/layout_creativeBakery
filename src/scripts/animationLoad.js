'use strict'

window.addEventListener('load', () => {
  setTimeout(() => {
  const loadAnimation = document.querySelector('.load__animation');
  const mainContent = document.querySelector('.main__content')

  loadAnimation.style.display = 'none'

  mainContent.classList.remove('hiden');
  mainContent.classList.add('show');
}, 1500)
})
