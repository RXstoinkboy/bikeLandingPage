export function layout() {
  const background = document.querySelector('.bg-wrapper');
  if (window.scrollY >= (window.innerHeight) * 2) {
    background.style.backgroundImage = 'url("../../../dist/images/footerBackground.jpg")';
  } else {
    background.style.backgroundImage = 'url("../../../dist/images/topBackground.jpg")';
  }
}
