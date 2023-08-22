import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const initialHash = window.location.hash;

  if (initialHash === '#menu' && menuToggle.classList.contains('icon--menu')) {
    menuToggle.classList.remove('icon--menu');
    menuToggle.classList.add('icon--close');
  }

  menuToggle.addEventListener('click', function() {
    const icon = this.classList;

    if (icon.contains('icon--menu')) {
      this.href = '#menu';
      icon.remove('icon--menu');
      icon.add('icon--close');
    } else if (icon.contains('icon--close')) {
      this.href = '#';
      icon.remove('icon--close');
      icon.add('icon--menu');
    }
  });

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
      menuToggle.classList.remove('icon--menu');
      menuToggle.classList.add('icon--close');
    } else {
      document.body.classList.remove('page__body--with-menu');
      menuToggle.classList.remove('icon--close');
      menuToggle.classList.add('icon--menu');
    }
  });
});

AOS.init({
  duration: 1200,
  delay: 200,
});
