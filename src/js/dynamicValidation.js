export function dynamicValidation() {
  const input = document.querySelector('input[type=email]');

  if (!(input.checkValidity())) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
}
