'use strict';

document.addEventListener("DOMContentLoaded", function () {
  target();
});

function target() {
  const body = document.body;
  const aside = document.getElementById("Menu");
  const burgerButton = document.getElementById("burgerButton");
  const closeButton = document.getElementById("closeButton");
  const menuLinks = aside.querySelectorAll("a[href^='#']");

  const closeMenu = () => {
    body.classList.remove("no-scroll");
    aside.classList.remove("menu__open");
  }

  burgerButton.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("no-scroll");
    aside.classList.toggle("menu__open");
  })

  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    closeMenu();
  })

  menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}
