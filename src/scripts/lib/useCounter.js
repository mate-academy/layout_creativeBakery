import { COUNTERS_CONFIG, COUNTER_SCROLL_POSITION } from './constants';
import { onCount } from './counter';

export const useCounter = () => {
  const startCounter = () => {
    const counterParentEl = document.getElementById('about');

    const { y: posY } = counterParentEl.getBoundingClientRect();

    if (posY < COUNTER_SCROLL_POSITION) {
      COUNTERS_CONFIG.forEach(({ id, endValue, startValue }) => {
        const element = document.getElementById(id);

        if (element) {
          element.parentElement.classList.add('visible');
          onCount(element, startValue, endValue);
        }
      });

      document.removeEventListener('scroll', onScrollToCounter);
    }
  };

  const onScrollToCounter = () => {
    startCounter();
  };

  document.addEventListener('scroll', onScrollToCounter);
};
