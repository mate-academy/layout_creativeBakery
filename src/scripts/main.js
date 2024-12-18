'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.getElementById('close-terms');
  const termsElement = document.getElementById('terms');

  if (closeButton && termsElement) {
    closeButton.addEventListener('click', (e) => {
        e.preventDefault();

        termsElement.classList.add('is-closing');

        setTimeout(() => {
            termsElement.classList.remove('is-closing');
            window.location.hash = 'contacts';
        }, 500);
    });
  }
});


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu' || window.location.hash === '#terms') {
    setTimeout(() => {
      document.body.classList.add('page__body--with-menu');
    }, 300)
  } else {
    setTimeout(() => {
      document.body.classList.remove('page__body--with-menu');
    }, 0)
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-effect");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");

            if (entry.target.classList.contains("scroll-effect-1")) {
              entry.target.classList.add("scroll-effect--1");
            }
            if (entry.target.classList.contains("scroll-effect-2")) {
              entry.target.classList.add("scroll-effect--2");
            }
            if (entry.target.classList.contains("scroll-effect-3")) {
              entry.target.classList.add("scroll-effect--3");
            }

            document.body.style.overflowX = "hidden"

            entry.target.addEventListener("transitionend", () => {
              setTimeout(() => {
                document.body.style.overflowX = "auto";
              }, 15000);
            });

            observer.unobserve(entry.target);
          }
      });
  }, {
      rootMargin: "0px 0px -60px 0px",
  });

  elements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll('a[href]');

  anchors.forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          const href = this.getAttribute("href");

          if (!href.startsWith("#") || this.hasAttribute("data-ignore")) {
              return;
          }

          e.preventDefault();

          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (!targetElement) {
              return;
          }

          const headerHeight = document.querySelector("nav")?.offsetHeight || 0;

          window.scrollTo({
              top: targetElement.offsetTop - headerHeight,
              behavior: "smooth",
          });
      });
  });
});



