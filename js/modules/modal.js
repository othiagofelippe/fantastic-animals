export default function initModal() {
  const activeClass = 'active'
  const botaoOpen = document.querySelector('[data-modal="open"]');
  const botaoClose = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  if(botaoOpen && botaoClose && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle(activeClass);
    }
 
    function clickForaModal(event) {
      if(event.target === this)
        toggleModal(event);
    }
    
    botaoOpen.addEventListener('click', toggleModal);
    botaoClose.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickForaModal);
  }
}


