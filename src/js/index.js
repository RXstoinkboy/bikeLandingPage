import { layout } from './layout.js';

window.addEventListener('load', () => {
  window.addEventListener('scroll', _.debounce(layout, 20));
});

