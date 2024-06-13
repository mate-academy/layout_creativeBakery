'use strict';

import { infoBlock, products } from "./array_of_data.js";

import {
  breakpoint,
  classHtml,
  querySelector,
  templateHtmlForAboutUs,
  templateHtmlForProduct,
  templateHtmlInformationNotification
} from "./functions.js";

const ACTIVE = '--active';
const NO_ACTIVE = '--no-active';

//#region menu

// button menu
  querySelector('top-bar__icon-menu').addEventListener('click', ()=> {

    classHtml('top-bar__icon-menu', 'toggle', 'top-bar__icon-menu' + ACTIVE);
    classHtml('menu', 'toggle', 'menu' + ACTIVE);

    (querySelector('menu--active'))
    ? classHtml('body', 'add', 'body__lock')
    : classHtml('body', 'remove', 'body__lock');

  });

  // menu window
  querySelector('menu__list').addEventListener('click', () => {
    classHtml('body', 'remove', 'body__lock');
    classHtml('top-bar__icon-menu', 'remove', 'top-bar__icon-menu' + ACTIVE);
    classHtml('menu', 'remove', 'menu' + ACTIVE);
  });

  // button logo
  querySelector('top-bar__logo').addEventListener('click', () => {
    classHtml('body', 'remove', 'body__lock');
    classHtml('top-bar__icon-menu', 'remove', 'top-bar__icon-menu' + ACTIVE);
    classHtml('menu', 'remove', 'menu' + ACTIVE);
  });

// #endregion

  querySelector('products__content').innerHTML = products.map(templateHtmlForProduct).join('');

  querySelector('about-us__content').innerHTML = infoBlock.map(templateHtmlForAboutUs).join('');

// #region clone items or sections

  // clone navigation menu to footer
    const cloneMenuList = querySelector('menu__list').cloneNode(true);
    cloneMenuList.classList = 'footer__list';

    querySelector('footer__menu--content').appendChild(cloneMenuList);

    const cloneItem =  cloneMenuList.querySelectorAll('LI');
    const cloneLink =  cloneMenuList.querySelectorAll('A');

    for(let i of cloneItem) {
      i.classList = 'footer__item';
    };

    for(let i of cloneLink) {
      i.classList = 'footer__link';
    };

    // add new position menu
    const newfooterItem = document.createElement('LI');
    const newfooterLink= document.createElement('A');

    newfooterItem.className = 'footer__item';

    newfooterLink.href = '#';
    newfooterLink.classList = 'footer__link';
    newfooterLink.textContent = 'Terms & Privacy';

    newfooterItem.appendChild(newfooterLink);
    cloneMenuList.appendChild(newfooterItem);

  // clone navigation menu to top-bar
  function trackScreenSize() {

    if (window.innerWidth > breakpoint('--desktop')) {

      classHtml('body', 'remove', 'body__lock');
      classHtml('top-bar__icon-menu', 'remove', 'top-bar__icon-menu' + ACTIVE);
      classHtml('menu', 'remove', 'menu' + ACTIVE);

      if (querySelector('top-bar__menu')) {
        return;
      }

      const cloneMenu = querySelector('menu').cloneNode(true);
      cloneMenu.classList = 'top-bar__menu';
      cloneMenu.style.backgroundColor = 'transparent';

      cloneMenu.addEventListener('click', () => {

        templateHtmlInformationNotification(
          'popup-call',
          'menu__contact',
          'first',
          'icon-phone-popup.9d6af868.svg'
        );

        classHtml('menu__contact--icon', 'add', 'menu__contact--icon' + NO_ACTIVE);

        setTimeout( ()=> {
          classHtml('menu__contact--icon', 'remove', 'menu__contact--icon' + NO_ACTIVE);
        }, 5200);
      });

      querySelector('top-bar').appendChild(cloneMenu);
      } else if (querySelector('top-bar__menu')) {
        querySelector('top-bar__menu').remove();
        classHtml('menu__contact--icon', 'remove', 'menu__contact--icon' + NO_ACTIVE);
      };
  };
// #endregion

  window.addEventListener('DOMContentLoaded', ()=> {
    trackScreenSize();
  });

  window.addEventListener('resize', ()=> {
    trackScreenSize();
  });

  // #region view information notification
  querySelector('menu__contact').addEventListener('click', () => {

    templateHtmlInformationNotification('popup-call', 'menu__contact', 'first', 'icon-phone-popup.9d6af868.svg');

    classHtml('menu__contact--icon', 'add', 'menu__contact--icon' + NO_ACTIVE);

    setTimeout( ()=> {
      classHtml('menu__contact--icon', 'remove', 'menu__contact--icon' + NO_ACTIVE);
    }, 5200);
  });

  querySelector('footer__call-list').addEventListener('click', () => {

    templateHtmlInformationNotification(
      'popup-call',
      'footer__content-contact',
      'end',
      'icon-phone-popup.9d6af868.svg'
    );
  });

  querySelector('footer__mail').addEventListener('click', () => {

    templateHtmlInformationNotification(
      'popup-call',
      'footer__content-email',
      'end',
      'icon-email.d67c3a5a.svg'
    );
  });
// #endregion

// #region changing colors
    document.addEventListener('DOMContentLoaded', ()=> {
      const colors = ["#ffeefc", "#eef7ff"];
      let currentColor = 0;

      function changingColors() {
        document.body.style.backgroundColor = colors[currentColor];
        querySelector('menu').style.backgroundColor = colors[currentColor];
        querySelector('top-bar').style.backgroundColor = colors[currentColor];
        currentColor = (currentColor + 1) % colors.length;
      }

      setInterval(changingColors, 8000);
      changingColors();
    });
//#endregion
