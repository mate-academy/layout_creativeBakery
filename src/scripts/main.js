'use strict';

import {
  classHtml,
  querySelector,
  querySelectorAll
} from "./functions.js";

const ACTIVE = '--active';
const NO_ACTIVE = '--no-active';

//#region button menu
  querySelector('top-bar__icon-menu').addEventListener('click', ()=> {

    classHtml('top-bar__icon-menu', 'toggle', 'top-bar__icon-menu' + ACTIVE);
    classHtml('menu', 'toggle', 'menu' + ACTIVE);
    (querySelector('menu--active'))
      ? classHtml('body', 'add', 'body__lock')
      : classHtml('body', 'remove', 'body__lock')

  });
// #endregion
