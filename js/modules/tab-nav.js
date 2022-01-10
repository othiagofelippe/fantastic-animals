export default function initTabNav() {
  const activeClass = 'active'
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] div');
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