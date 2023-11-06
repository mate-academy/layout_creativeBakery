'use strict';

// const headerText
//   = document.querySelector('.header__text.grid__item_tablet_1-4');
// const headerButton
//   = document.querySelector('.header__button');
// const mainSectionTitle
//   = document.querySelector('.section__title.grid__item_tablet_1-5');
// const mainSectionDescription
//   = document.querySelector('.section__description.grid__item_tablet_1-7');
// const sectionCard1
//   = document.querySelector('.section__card_1');
// const sectionCard2
//   = document.querySelector('.section__card_2');
// const sectionCard3
//   = document.querySelector('.section__card_3');
// const sectionCard4
//   = document.querySelector('.section__card_4');
// const sectionCard5
//   = document.querySelector('.section__card_5');
// const sectionCard6
//   = document.querySelector('.section__card_6');
// const aboutSectionTitle
//   = document.querySelector('.section__title.grid__item_tablet_1-4');
// const foundationYear
//   = document.querySelector('.section__statistics_foundation');
// const storesQnt
//   = document.querySelector('.section__statistics_stores');
// const companiesQnt
//   = document.querySelector('.section__statistics_companies');
// const clientsQnt
//   = document.querySelector('.section__statistics_clients');
const socialNetworkLogos
  = document.querySelectorAll('.social-networks__logo');

// function layoutUpdater() {
//   const viewport = window.innerWidth;

//   if (viewport >= 1200) {
//     headerText.classList.toggle('grid__item_tablet_1-4');
//     headerText.classList.toggle('grid__item_desctop_1-2');

//     headerButton.classList.toggle('grid__item_tablet_3-6');
//     headerButton.classList.toggle('grid__item_desctop_1-2');

//     mainSectionTitle.classList.toggle('grid__item_tablet_1-5');
//     mainSectionTitle.classList.toggle('grid__item_desctop_1-4');

//     mainSectionDescription.classList.toggle('grid__item_tablet_1-7');
//     mainSectionDescription.classList.toggle('grid__item_desctop_1-4');

//     sectionCard1.classList.toggle('grid__item_tablet_1-4');
//     sectionCard1.classList.toggle('grid__item_desctop_1-3');

//     sectionCard2.classList.toggle('grid__item_tablet_5-8');
//     sectionCard2.classList.toggle('grid__item_desctop_4-6');

//     sectionCard3.classList.toggle('grid__item_tablet_1-4');
//     sectionCard3.classList.toggle('grid__item_desctop_3-5');

//     sectionCard4.classList.toggle('grid__item_tablet_5-8');
//     sectionCard4.classList.toggle('grid__item_desctop_6-8');

//     sectionCard5.classList.toggle('grid__item_tablet_1-4');
//     sectionCard5.classList.toggle('grid__item_desctop_1-3');

//     sectionCard6.classList.toggle('grid__item_tablet_5-8');
//     sectionCard6.classList.toggle('grid__item_desctop_4-6');

//     aboutSectionTitle.classList.toggle('grid__item_tablet_1-4');
//     aboutSectionTitle.classList.toggle('grid__item_desctop_1-4');

//     foundationYear.classList.toggle('grid__item_tablet_1-4');
//     foundationYear.classList.toggle('grid__item_desctop_1-2');

//     storesQnt.classList.toggle('grid__item_tablet_5-8');
//     storesQnt.classList.toggle('grid__item_desctop_3-4');

//     companiesQnt.classList.toggle('grid__item_tablet_1-4');
//     companiesQnt.classList.toggle('grid__item_desctop_5-6');

//     clientsQnt.classList.toggle('grid__item_tablet_5-8');
//     clientsQnt.classList.toggle('grid__item_desctop_7-8');
//   }
// }

// window.addEventListener('resize', layoutUpdater());

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body_with-menu');
  } else {
    document.body.classList.remove('page__body_with-menu');
  }
});

socialNetworkLogos.forEach((logo, ind) => {
  if (ind !== socialNetworkLogos.length) {
    logo.addEventListener('blur', () => {
      socialNetworkLogos[ind + 1].focus();
    });
  }
});
