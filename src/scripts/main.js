"use strict";

const openMenu = document.getElementById("open-menu");
const navHidden = document.getElementById("nav-hidden");
const navContainer = document.getElementById("nav-container");
let lastScrollTop = 0;

const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

document.addEventListener("click", (event) => {
  if (event.target === openMenu || openMenu.contains(event.target)) {
    navHidden.style.right = 0;

    main.style.display = "none";
    footer.style.display = "none";
  } else {
    navHidden.style.right = "-100vw";

    main.style.display = "flex";
    footer.style.display = "block";
  }
});

window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    navContainer.style.top = "-95px";
  } else {
    navContainer.style.top = "0";
  }
  lastScrollTop = currentScrollTop;
});
