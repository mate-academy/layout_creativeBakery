// 'use strict';

// const switcher = document.querySelector('.theme-switcher');
// let isExtraTheme = false;

// switcher.addEventListener('click', () => {
//   isExtraTheme = !isExtraTheme;

//   document.documentElement.style.setProperty('--color-page', isExtraTheme ? '#1C1A26' : '#F9512E');
//   document.documentElement.style.setProperty('--bg-color-page', isExtraTheme ? '#EEF7FF' : '#FFEEFC');
//   document.documentElement.style.setProperty('--switch-transform', isExtraTheme ? '100%' : '0');
// });

// Only works for the first switch

'use strict';

const switchers = document.querySelectorAll('.theme-switcher');
let isExtraTheme = false;

switchers.forEach(switcher => {
  switcher.addEventListener('click', () => {
    isExtraTheme = !isExtraTheme;

    document.documentElement.style.setProperty('--color-page', isExtraTheme ? '#1C1A26' : '#F9512E');
    document.documentElement.style.setProperty('--bg-color-page', isExtraTheme ? '#EEF7FF' : '#FFEEFC');
    document.documentElement.style.setProperty('--switch-transform', isExtraTheme ? '100%' : '0');
  });
});
