'use strict';
import SmoothScroll from 'smoothscroll-for-websites';

SmoothScroll({
  // Scrolling Core
  animationTime: 1000, // [ms]
  stepSize: 150, // [px]

  // Acceleration
  accelerationDelta: 50, // 50
  accelerationMax: 3, // 3

  // Keyboard Settings
  keyboardSupport: true, // option
  arrowScroll: 50, // [px]

  // Pulse (less tweakable)
  // ratio of 'tail' to 'acceleration'
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Other
  touchpadSupport: false, // ignore touchpad by default
  fixedBackground: true,
  excluded: '',
});
