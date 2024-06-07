'use strict';

import { infoBlock, products } from "./array_of_data.js";

import {
  classHtml,
  cloningElement,
  elementCloning,
  elementCloningAll,
  querySelector,
  querySelectorAll,
  templateHtmlForAboutUs,
  templateHtmlForProduct,
  trackScreenSize
} from "./functions.js";

const ACTIVE = '--active';
const NO_ACTIVE = '--no-active';

//#region button menu
  querySelector('top-bar__icon-menu').addEventListener('click', ()=> {

    classHtml('top-bar__icon-menu', 'toggle', 'top-bar__icon-menu' + ACTIVE);
    classHtml('menu', 'toggle', 'menu' + ACTIVE);
    (querySelector('menu--active'))
      ? classHtml('body', 'add', 'body__lock')
      : classHtml('body', 'remove', 'body__lock');

    });
    // #endregion

    querySelector('products__content').innerHTML = products.map(templateHtmlForProduct).join('');

    querySelector('about-us__content').innerHTML = infoBlock.map(templateHtmlForAboutUs).join('');

    // #region clone navigation menu
    const cloneMenu = querySelector('menu__list').cloneNode(true);
    cloneMenu.classList = 'footer__list';

    querySelector('footer__menu--content').appendChild(cloneMenu);

    const cloneItem =  cloneMenu.querySelectorAll('LI');
    const cloneLink =  cloneMenu.querySelectorAll('A');

    for(let i of cloneItem) {
      i.classList = 'footer__item';
    };

    for(let i of cloneLink) {
      i.classList = 'footer__link';
    };
    // #endregion
