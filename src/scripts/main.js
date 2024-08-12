'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const sideBar = document.getElementById('sidebar');
    const close = document.getElementById('side-close');
    const sideLogo = document.getElementById('side-logo');
  
    burgerMenu.addEventListener('click', () => {
      sideBar.style.display = 'block';
      document.body.style.overflow = "hidden"
    });

    close.addEventListener('click', () => {
      sideBar.style.display = 'none';
       document.body.style.overflow = "auto"
    });

    sideLogo.addEventListener('click', () => {
      sideBar.style.display = 'none';
    });

    const arrTagLink = Array.from(sideBar.getElementsByClassName('sidebar__list__link'))
    
    arrTagLink.map(tag => {
      tag.addEventListener('click', () => {
        sideBar.style.display = 'none';
        document.body.style.overflow = "auto"
      })
    })
  });
  