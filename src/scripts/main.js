'use strict';

// Seleciona o botão que abre o menu
const menuButton = document.querySelector('.navbar__icon-link');

// Seleciona o menu lateral
const menuAside = document.querySelector('.page__aside');

// Seleciona o botão de fechar dentro do menu
const closeButton = document.querySelector('.aside__menu--top-close');

// Quando clicar para abrir o menu
menuButton.addEventListener('click', () => {
  menuAside.classList.add('is-target');             // Mostra o menu
  document.body.classList.add('menu-open');         // Bloqueia rolagem
});

// Quando clicar para fechar o menu
closeButton.addEventListener('click', () => {
  menuAside.classList.remove('is-target');          // Esconde o menu
  document.body.classList.remove('menu-open');      // Libera rolagem
});

// Seleciona todos os links dentro do menu lateral
const menuLinks = document.querySelectorAll('.aside__menu--list a, .aside__menu--list-contact');

// Para cada link, adiciona um evento de clique
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuAside.classList.remove('is-target');         // Fecha o menu
    document.body.classList.remove('menu-open');     // Libera rolagem
  });
});

