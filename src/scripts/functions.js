'use strict';

// #region requests and properties
export function querySelector(className) {
  return document.querySelector(`.${className}`);
};

export function querySelectorAll(clasessName) {
  return document.querySelectorAll(`.${clasessName}`);
};

export function breakpoint(breakpoint) {
  return getComputedStyle(document.documentElement)
  .getPropertyPriority(breakpoint)
  .slice(0, -2);
};
// #endregion

// #region manipulation of class
export function classHtml(nameClass, event, newClass) {
  return querySelector(nameClass).classList[event](newClass);
}
// #endregion

// #region template for product setion
export function templateHtmlForProduct(name) {
  return  `<article class="products__card">

            <div class="products__image">
            <img
              class="products__img"
              src=${name.image}
              alt="Creative Bakery cakes"
            >
            </div>

            <h3 class="products__subtitle">${name.title}</h3>
            <p class="products__text">${name.text}</p>
            <div class="products__wrapper">
            <a class="products__link" href=${name.link}>Order</a>
            </div>
          </article>`;
};

export function templateHtmlForAboutUs(name) {
  return  `<div class="about-us__card">
            <h2 class="about-us__numbers">${name.numbers}</h2>
            <p class="about-us__text">${name.text}</p>
          </div>`;
};

export function templateHtmlInformationNotification(nameClass, content, method, url) {

  if(querySelector(nameClass)) {
    return;
  }

  const template = document.createElement('article');
        template.classList = nameClass;

        template.innerHTML = `
          <img
            class="${nameClass}__icon"
            src="${url}"
            alt="reative Bakery phone"
          >

          <div class="${nameClass}__dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        `;

        setTimeout ( ()=> {
          template.style.transform = 'scale(1)';
        }, 10);

        setTimeout ( ()=> {
          template.style.transform = 'scale(0)';
        }, 5000);

        setTimeout ( ()=> {
          template.remove();
        }, 5200);

  return (method === 'first')
  ? querySelector(content).prepend(template)
  : querySelector(content).appendChild(template);
};
// #endregion
