// Анімація цифр в розділі About us при скроллі
{
  function animateNumber(el, endValue, duration = 1500, suffix = '') {
    let start = 0;
    const increment = endValue / (duration / 16);

    function step() {
      start += increment;
      if (start < endValue) {
        el.textContent = Math.floor(start) + suffix;
        requestAnimationFrame(step);
      } else {
        el.textContent = endValue + suffix;
      }
    }

    step();
  }

  const stats = document.querySelectorAll('.stats__stat');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat) => {
            const numberEl = stat.querySelector('.stats__big-text');
            if (numberEl.textContent.includes('K+')) {
              animateNumber(numberEl, 10, 1500, 'K+');
            } else {
              const finalNumber = parseInt(numberEl.textContent, 10);
              animateNumber(numberEl, finalNumber);
            }
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(document.querySelector('.stats'));
}

// Анімація появи карток товару при скроллі
{
  const productItems = document.querySelectorAll('.products__item');

  const productObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(productItems).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, index * 150); // задержка 150ms между карточками
          productObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  productItems.forEach((item) => productObserver.observe(item));
}
