'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  document.location.reload();
  event.preventDefault();
});

document.querySelector(".mobile-menu__list").onclick = () => {
  document.querySelector(".header__toggler").checked = false;
}
