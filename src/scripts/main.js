'use strict';


const button = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const imgOne = document.getElementById("menuFirstImg");
const imgTwo = document.getElementById("menuSecondImg");
const body = document.body;
let isOpen = false;

button.addEventListener("click", toggleMenu);

// Закриваємо меню після переходу по якірному посиланню
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

function toggleMenu() {
  isOpen = !isOpen;
  menu.style.display = isOpen ? "block" : "none";
  imgOne.style.display = isOpen ? "none" : "block";
  imgTwo.style.display = isOpen ? "block" : "none";
  body.classList.toggle('body-no-scroll', isOpen);
}

function closeMenu() {
  isOpen = false;
  menu.style.display = "none";
  imgOne.style.display = "block";
  imgTwo.style.display = "none";
  body.classList.remove('body-no-scroll');
}
