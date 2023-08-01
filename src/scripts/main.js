'use strict';

//  Burger menu - add new classes
//  ***** Start

document.addEventListener('DOMContentLoaded', function() {
  const burgerMenuIcon = document.querySelector('.menu__burger-button');
  const burgerMenuWrapper = document.querySelector('.menu__wrapper--burger');
  const burgerMenuList = document.querySelector('.menu__list--burger');
  const burgerMenuItems = document.querySelectorAll(
    '.menu__list--burger .menu__item, .menu__link--call-action'
  );
  const actionsLink = document.querySelector(
    '.menu__link--call-action'
  );
  const mainPageBody = document.querySelector('.page__body');

  burgerMenuEventListners();

  function burgerMenuEventListners() {
    burgerMenuIcon.addEventListener('click', burgerMenuIconClick);

    burgerMenuItems.forEach(el =>
      el.addEventListener('click', burgerMenuItemsClick)
    );
  }

  function burgerMenuIconClick() {
    burgerMenuIcon.classList.toggle('menu__burger-button--is-active');
    burgerMenuWrapper.classList.toggle('menu__wrapper--is-open');
    burgerMenuList.classList.toggle('menu__list--is-visible');
    actionsLink.classList.toggle('menu__link--is-visible');
    mainPageBody.classList.toggle('page__body--with-menu');
  }

  function burgerMenuItemsClick() {
    if (burgerMenuWrapper.classList.contains('menu__wrapper--is-open')) {
      burgerMenuIcon.click();
    }
  }
});

//  Burger menu - End *****
//  ---------------------------------
//  Products section - multiply hover state for an image and a link
//  ***** Start

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(function(el) {
    el.addEventListener('mouseover', function(e) {
      if (e.target.classList.contains('card__image')) {
        e.target.style.transform = 'scale(1.1)';

        el.querySelector('.icons--arrow--right').style
          .transform = 'translateX(6px)';
      }

      if (e.target.classList.contains('card__link')) {
        el.querySelector('.card__image').style.transform = 'scale(1.1)';

        el.querySelector('.icons--arrow--right')
          .style.transform = 'translateX(6px)';
      }
    });

    el.addEventListener('mouseout', function(e) {
      el.querySelector('.card__image').style.transform = null;
      el.querySelector('.card__link').style.color = null;
      el.querySelector('.icons--arrow--right').style.transform = null;
    });
  });
});

//  Products section - End *****
//  ---------------------------------
//  About section - statistic number counter on scroll
//  ***** Start

document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.about__stat-number');

  elements.forEach(function(item) {
    item.counterAlreadyFired = false;
    item.counterSpeed = item.getAttribute('data-counter-time') / 45;
    item.counterTarget = +item.innerText;
    item.counterCount = 0;
    item.counterStep = item.counterTarget / item.counterSpeed;

    item.updateCounter = function() {
      item.counterCount = item.counterCount + item.counterStep;
      item.innerText = Math.ceil(item.counterCount);

      if (item.counterCount < item.counterTarget) {
        setTimeout(item.updateCounter, item.counterSpeed);
      } else {
        item.innerText = item.counterTarget;
      }
    };
  });

  const isElementVisible = function isElementVisible(el) {
    const scroll = window.scrollY || window.pageYOffset;
    const boundsTop = el.getBoundingClientRect().top + scroll;
    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    };
    const bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    };

    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
      || (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    );
  };

  const handleScroll = function handleScroll() {
    elements.forEach(function(item) {
      if (item.counterAlreadyFired === true) {
        return;
      }

      if (!isElementVisible(item)) {
        return;
      }
      item.updateCounter();
      item.counterAlreadyFired = true;
    });
  };

  window.addEventListener('scroll', handleScroll);
});

//  About section - End *****
//  ---------------------------------
//  Header - coockie parallax effect on mousemove
//  ***** Start

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.header__content');
  const parallax = document.querySelectorAll('.parallaxed');
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  container.addEventListener('mousemove', function(event) {
    if (window.innerWidth < 1024) {
      return;
    }
    parallaxed(event);
  });

  container.addEventListener('mouseout', function(event) {
    if (window.innerWidth < 1024) {
      return;
    }
    parallaxedStop(event);
  });

  function parallaxed(e) {
    const amountMovedX = containerWidth / 2 - e.clientX;
    const amountMovedY = containerHeight / 2 - e.clientY;
    const left = amountMovedX * -0.2 / 8;
    const top = amountMovedY * -0.2 / 8;

    for (const item of parallax) {
      item.style.transform = 'translate3d(' + left + 'px,' + top + 'px, 0)';
      item.style.setProperty('--translate', '' + left + 'px,' + top + 'px, 0');
    }
  }

  function parallaxedStop() {
    for (const item of parallax) {
      item.style.transform = null;
      item.style.setProperty('--translate', '0, 0, 0');
    }
  }
});

//  Header parallax - End *****
