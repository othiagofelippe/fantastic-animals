export default function initAnimationScroll() {
  const activeClass = 'active'
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;
    
    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHalf) < 0;
        if (isSectionVisible) {
          section.classList.add(activeClass)
        }
      })
    }
    animateScroll();
    
    window.addEventListener('scroll', animateScroll);
  }
}