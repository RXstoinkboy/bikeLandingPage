import { toggleMenu } from './navButton.js';

window.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.navButton');
  const hideNav = document.querySelector('.nav__hideNav');

  navButton.addEventListener('click', toggleMenu);
  hideNav.addEventListener('click', toggleMenu);
});
