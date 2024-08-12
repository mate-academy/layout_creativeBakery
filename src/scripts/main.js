'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const sideBar = document.getElementById('sidebar');
    const close = document.getElementById('side-close');
    const sideLogo = document.getElementById('side-logo');
  
    burgerMenu.addEventListener('click', () => {
      sideBar.style.top = '0';
      sideBar.style.opacity = '1';
      document.body.style.overflow = "hidden"
    });

    close.addEventListener('click', () => {
      sideBar.style.top = '-900px';
      sideBar.style.opacity = '0';
       document.body.style.overflow = "auto"
    });

    sideLogo.addEventListener('click', () => {
      sideBar.style.top = '-900px';
    });

    const arrTagLink = Array.from(sideBar.getElementsByClassName('sidebar__list__link'))
    
    arrTagLink.map(tag => {
      tag.addEventListener('click', () => {
        sideBar.style.top = '-900px';
        sideBar.style.opacity = '0';
        document.body.style.overflow = "auto"
      })
    })
  });
  