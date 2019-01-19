export function layout() {
  const background1 = document.querySelector('.backgroundCont1');
  const background2 = document.querySelector('.backgroundCont2');
  if (window.scrollY >= (window.innerHeight) * 1.5) {
    background1.style.display = 'none';
  } else {
    background1.style.display = 'block';
  }
}
