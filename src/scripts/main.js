'use strict';

const header = document.querySelector('.header')
const burger = header.querySelector('.burger')
const navHeader = header.querySelector('.nav-header')
const navHeaderLinks = navHeader.querySelectorAll('.nav__link')

function toggleComponents(burger, navHeader) {
  burger.classList.toggle('burger--active')
  navHeader.classList.toggle('nav-header--active')

  if(navHeader.classList.contains('nav-header--active'))
    document.body.style.overflow = 'hidden'
  else document.body.style.overflow = ''
}

function onBurgerCLick(burger, navHeader) {
  burger.addEventListener('click',() => toggleComponents(burger,navHeader))
}

function closeMenuOnMenuLinkClick(navHeaderLinks, burger, navHeader) {
  for (let item of navHeaderLinks) {
    item.addEventListener('click',() => toggleComponents(burger, navHeader))
  }
}

document.addEventListener('DOMContentLoaded',() => {
  if (window.innerWidth <= 1200) {
    onBurgerCLick(burger, navHeader);
    closeMenuOnMenuLinkClick(navHeaderLinks, burger, navHeader);
  }
})
