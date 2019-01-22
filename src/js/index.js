import { toggleMenu } from './navButton.js';
import { dynamicValidation } from './dynamicValidation.js';
import { scrollToSection } from './scrollToContact.js';

window.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.navButton');
  const hideNav = document.querySelector('.nav__hideNav');
  const input = document.querySelector('input[type=email]');
  const form = document.querySelector('form');
  const mainButton = document.querySelector('.header__buttonDown');
  const bikeImg = document.querySelector('.header__heroImg');
  const headerTexts = document.querySelector('.header__midSection');

  form.setAttribute('novalidate', true);
  bikeImg.classList.add('header__heroImg--active');
  headerTexts.classList.add('header__midSection--active');

  mainButton.addEventListener('click', scrollToSection);
  input.addEventListener('input', dynamicValidation);
  navButton.addEventListener('click', toggleMenu);
  hideNav.addEventListener('click', toggleMenu);
});
