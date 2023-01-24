'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page_body-with-menu');
  } else {
    document.body.classList.remove('page_body-with-menu');
  }
});

window.addEventListener('load', windowLoad);

function digitsCounterAnimate(digitsCounter) {
  let startTimesTemp = null;
  const duration = parseInt(
    digitsCounter.dataset.digitsCounter
      ? digitsCounter.dataset.digitsCounter
      : 1000
  );
  const startValue = parseInt(digitsCounter.innerHTML);
  const startPosition = 0;
  const step = (timestamp) => {
    if (!startTimesTemp) {
      startTimesTemp = timestamp;
    };

    const progress = Math.min((timestamp - startTimesTemp) / duration, 1);

    digitsCounter.innerHTML = Math.floor(
      progress * (startPosition + startValue)
    );

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

function windowLoad() {
  function digitsCountersInit(digitsCounterItems) {
    const digitsCounters = digitsCounterItems
      || document.querySelectorAll('[data-digits-counter]');

    if (digitsCounters) {
      digitsCounters.forEach(digitsCounter => {
        digitsCounterAnimate(digitsCounter);
      });
    }
  }

  const options = {
    threshold: 0.3,
  };

  const callBack = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCounterItems = targetElement
          .querySelectorAll('[data-digits-counter]');

        if (digitsCounterItems.length) {
          digitsCountersInit(digitsCounterItems);
        }
      }
    });
  };

  const observer = new window.IntersectionObserver(callBack, options);

  const sections = document.querySelectorAll('section');

  if (sections.length) {
    sections.forEach(section => observer.observe(section));
  }
}
