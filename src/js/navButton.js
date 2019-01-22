export function toggleMenu() {
  const navButton = document.querySelector('.navButton');
  const nav = document.querySelector('.nav');

  navButton.classList.toggle('navButton--active');
}
