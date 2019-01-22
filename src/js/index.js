import { toggleMenu } from './navButton.js';
import { dynamicValidation } from './dynamicValidation.js';
import { scrollToSection } from './scrollToContact.js';

window.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.navButton');
  const hideNav = document.querySelector('.nav__hideNav');
  const input = document.querySelector('input[type=email]');
  const form = document.querySelector('form');
  const mainButton = document.querySelector('.header__buttonDown');

  form.setAttribute('novalidate', true);

  mainButton.addEventListener('click', scrollToSection);

  input.addEventListener('input', dynamicValidation);

  navButton.addEventListener('click', toggleMenu);
  hideNav.addEventListener('click', toggleMenu);
});
