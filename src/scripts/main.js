'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const openMenuButton = document.querySelector(".icon--menu");
  const closeMenuButton = document.querySelector(".icon--close");
  const body = document.body;
  const menuLinks = document.querySelectorAll("#menu a");

  openMenuButton.addEventListener("click", () => {
    menu.classList.add("menu--open");
    body.classList.add("no-scroll");
  });

  closeMenuButton.addEventListener("click", () => {
    menu.classList.remove("menu--open");
    body.classList.remove("no-scroll");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("menu--open");
      body.classList.remove("no-scroll");
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.section__card');
  const desktopMinWidth = 1280;

  function isDesktop() {
    return window.innerWidth >= desktopMinWidth;
  }

  function showCardsImmediately() {
    cards.forEach((card) => {
      card.classList.remove('animate');
      card.style.opacity = '1';
      card.style.transform = 'none';
    });
  }

  function setupAnimation() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 300);
          }
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }

  if (isDesktop()) {
    setupAnimation();
  } else {
    showCardsImmediately();
  }

  window.addEventListener('resize', () => {
    if (isDesktop()) {
      setupAnimation();
    } else {
      showCardsImmediately();
    }
  });
});
