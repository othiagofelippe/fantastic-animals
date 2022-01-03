const activeClass = 'active'

function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent div');
  tabContent[0].classList.add(activeClass)
  
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove(activeClass);
      })
      tabContent[index].classList.add(activeClass);
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function() {
        activeTab(index);
      })
    })
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  if (accordionList) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}
initAccordion();

function initScrollLight() {
  const linksInternal = document.querySelectorAll('.js-menu a[href^="#"]');

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
initScrollLight();

function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll');
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
initAnimationScroll();
