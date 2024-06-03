'use strict';

// #region requests and properties
export function querySelector(className) {
  return document.querySelector(`.${className}`);
}

export function querySelectorAll(clasessName) {
  return document.querySelectorAll(`.${clasessName}`);
}
// #endregion

// #region manipulation of class
export function classHtml(nameClass, event, newClass) {
  return querySelector(nameClass).classList[event](newClass);
}
// #endregion
