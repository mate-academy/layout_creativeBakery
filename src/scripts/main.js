'use strict';

const body = document.body;
const burgerMenu = body.querySelector('.header__menu-opener');
const navLinks = body.querySelectorAll('a[href^="#"');
const stat = body.querySelector('.statistic');
const statistics = body.querySelectorAll('.statistic__number');
const animTime = 1000;
let canShow = true;

const menuToggler = () => {
  const lines = body.querySelectorAll('.header__menu-opener-line');
  const menu = body.querySelector('.menu');

  menu.classList.toggle('menu--active');

  lines.forEach(line => {
    line.classList.toggle('header__menu-opener-line--active');
  });

  if (menu.className.includes('menu--active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'visible';
  }
};

burgerMenu.addEventListener('click', menuToggler);

navLinks.forEach(navLink => {
  navLink.addEventListener('click', function(e) {
    e.preventDefault();

    const href = this.getAttribute('href').slice(1);
    const scrollTarget = document.getElementById(href);
    const headerHeight = body.querySelector('.header').clientHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });

    if (navLink.className.includes('menu') && window.innerWidth < 1024) {
      menuToggler();
    }
  });
});

window.addEventListener('scroll', () => {
  if (!canShow) {
    return false;
  }

  const statHeight = stat.offsetHeight;
  const statOffset = Math.round(
    stat.getBoundingClientRect().top + window.pageYOffset
  );
  const startPoint = window.innerHeight - statHeight / 4;

  if (window.pageYOffset > statOffset - startPoint
    && window.pageYOffset < statOffset + startPoint) {
    statistics.forEach((statistic) => {
      let num = 0;
      const statisticNumber = parseInt(statistic.dataset.value);
      const step = (statisticNumber > 1000)
        ? 100
        : (statisticNumber > 100)
          ? 10
          : 1;
      const stepTime = animTime / (statisticNumber / step);
      const interval = setInterval(() => {
        num += step;

        if (num > statisticNumber) {
          num = statisticNumber;
          clearInterval(interval);
        }

        statistic.textContent = (statistic.dataset.value.includes('k'))
          ? `${num}K+`
          : num;
      }, stepTime);

      canShow = false;
    });
  }
});
