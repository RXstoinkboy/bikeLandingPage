export function scrollToSection() {
  const contact = document.querySelector('.contact');

  contact.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
  console.log('scroll');
}
