export const onCount = (element, start, end, duration = 500) => {
  const endAdornment = element.dataset.endAdornment || '';

  const range = end - start;
  let startTime = null;

  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp;

    const progress = Math.min((timestamp - startTime) / duration, 1);
    element.innerText = Math.floor(progress * range + start) + endAdornment;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
};
