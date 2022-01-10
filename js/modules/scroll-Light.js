export default function initScrollLight() {
  const activeClass = 'active'
  const linksInternal = document.querySelectorAll('[data-menu="light"] a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  
  linksInternal.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}