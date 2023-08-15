'use strict';

const body = document.querySelector('.page__body');

// Menu
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');

function menuClose() {
  iconMenu.classList.remove('_menu-open');
  menuBody.classList.remove('_menu-open');
  body.classList.remove('_lock');
}

function menuOpen() {
  menuBody.classList.add('_menu-open');
  body.classList.add('_lock');
}

if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    iconMenu.classList.toggle('_menu-open');

    if (iconMenu.classList.contains('_menu-open')) {
      menuOpen();

      if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
          menuLink.addEventListener('click', function() {
            menuClose();
          });
        });
      }
    } else {
      menuClose();
    }
  });
}

// Dynamic Adapt
class DynamicAdapt {
  constructor(type) {
    this.type = type;
  }
  init() {
    this.оbjects = [];
    this.daClassname = '_dynamic_adapt_';
    this.nodes = [...document.querySelectorAll('[data-da]')];

    this.nodes.forEach((node) => {
      const data = node.dataset.da.trim();
      const dataArray = data.split(',');
      const оbject = {};

      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
      оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    });

    this.arraySort(this.оbjects);

    this.mediaQueries = this.оbjects
      .map(({ breakpoint }) =>
        `(${this.type}-width: ${breakpoint}px),${breakpoint}`)
      .filter((item, index, self) => self.indexOf(item) === index);

    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      const оbjectsFilter = this.оbjects.filter(({ breakpoint }) =>
        breakpoint === mediaBreakpoint);

      matchMedia.addEventListener('change', () => {
        this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    });
  }
  mediaHandler(matchMedia, оbjects) {
    if (matchMedia.matches) {
      оbjects.forEach((оbject) => {
        // оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      });
    } else {
      оbjects.forEach(({ parent, element, index }) => {
        if (element.classList.contains(this.daClassname)) {
          this.moveBack(parent, element, index);
        }
      });
    }
  }
  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);

    if (place === 'last' || place >= destination.children.length) {
      destination.append(element);

      return;
    }

    if (place === 'first') {
      destination.prepend(element);

      return;
    }
    destination.children[place].before(element);
  }
  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);

    if (parent.children[index] !== undefined) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }
  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }

  arraySort(arr) {
    if (this.type === 'min') {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === 'first' || b.place === 'last') {
            return -1;
          }

          if (a.place === 'last' || b.place === 'first') {
            return 1;
          }

          return 0;
        }

        return a.breakpoint - b.breakpoint;
      });
    } else {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }

          if (a.place === 'first' || b.place === 'last') {
            return 1;
          }

          if (a.place === 'last' || b.place === 'first') {
            return -1;
          }

          return 0;
        }

        return b.breakpoint - a.breakpoint;
      });
    }
  }
}

const da = new DynamicAdapt('max');

da.init();

const numbersDisplay = document.querySelectorAll('.numbers__number-digit');
const scrollTrigger = document.querySelector('.about-us');
const footerContent = document.querySelector('.footer');

if (numbersDisplay.length > 0 && scrollTrigger) {
  window.addEventListener('scroll', function onScroll() {
    const triggerPositionTop = scrollTrigger.getBoundingClientRect().top;

    if (triggerPositionTop < (window.innerHeight / 2)) {
      this.removeEventListener('scroll', onScroll);
      scrollTrigger.classList.add('_anim-active');

      numbersDisplay.forEach(numberDisplay => {
        let start = parseInt(numberDisplay.innerHTML);
        const end = parseInt(numberDisplay.dataset.max);

        if (end < 50) {
          const intervalShort = setInterval(function() {
            if (start < end) {
              numberDisplay.innerHTML = ++start;
            } else {
              clearInterval(intervalShort);
            }
          }, 50);
        } else {
          const interval = setInterval(function() {
            if (start < end) {
              numberDisplay.innerHTML = ++start;
            } else {
              clearInterval(interval);
            }
          }, 10);
        }
      });
    }
  });
  scrollTrigger.classList.remove('_anim-active');
}

if (footerContent) {
  window.addEventListener('scroll', function onScrollToFooter() {
    const footerContentPositionTop = footerContent.getBoundingClientRect().top;

    if (footerContentPositionTop < (window.innerHeight / 2)) {
      this.removeEventListener('scroll', onScrollToFooter);
      footerContent.classList.add('_anim-active');
    }
  });
  footerContent.classList.remove('_anim-active');
}
