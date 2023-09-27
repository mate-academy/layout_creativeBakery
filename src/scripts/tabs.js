'use strict';

const tabs = document.querySelectorAll('.shop__tab-box--button');
const allСontent = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    // tabs.forEach(tab => {
    //   tab.classList.remove('active');
    // });
    tab.classList.remove('active');
    tab.classList.add('active');

    const line = document.querySelector('.shop__tab-box--line');

    line.style.width = e.target.offsetWidth + 'px';
    line.style.left = e.target.offsetLeft + 'px';

    allСontent.forEach(content => {
      content.classList.remove('content__active');
    });

    allСontent[index].classList.add('content__active');
  });
});
