import { toggleMenu } from './navButton.js';

window.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.navButton');

  navButton.addEventListener('click', toggleMenu);
});
