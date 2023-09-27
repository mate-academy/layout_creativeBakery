'use strict';

const button = document.getElementById('product-btn');

// var shop = document.getElementById('shop-var');
const shop = document.querySelector('.icon--shop__var');
const delet = document.querySelector('.product__card--delete-btn');
let count = 0;
let res = 0;
const sS = window.sessionStorage;

// if (Number.shop.innerHTML <= 0) {
//   shop.style.display = 'none';
// }
// if (zalups >= 0) {
//   shop.style.display = 'none';
// } else {
//   shop.style.display = 'block';
// }

if (button) {
  button.addEventListener('click', function() {
    count++;
    res = count;
    sS.setItem('res', res);
    // lS.setItem('res', res);
    shop.innerHTML = sS.getItem('res');
    shop.style.display = 'flex';
    // shop.innerHTML = lS.getItem('res');
  });
};

if (delet) {
  delet.addEventListener('click', function() {
    shop.innerHTML = 0;
    count = 0;
    res = 0;
    sS.setItem('res', res);
    shop.style.display = 'none';
    // lS.setItem('res', res);
  });
};

if (typeof window !== 'undefined') {
  // shop.innerHTML = sessionStorage.getItem('res');
  // count = shop.innerHTML;
  count = sS.getItem('res');
  // count = lS.getItem('res');
  shop.innerHTML = count;
};

if (count <= 0) {
  shop.style.display = 'none';
}
