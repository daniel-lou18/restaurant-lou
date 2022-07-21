import './style.css';
import home from './home';
import menu from './menu';

const tabs = (function() {
  const content = document.querySelector('#content');
  const tabContainer = document.createElement('div');
  tabContainer.classList.add('tab-container');
  const createButtons = (function() {
    for (let i=0; i<3; i++) {
      const tabNames = ['Home', 'Menu', 'Contact'];
      const tabButton = document.createElement('button');
      tabButton.addEventListener('click', showPage);
      tabButton.classList.add(`tab-${i}`);
      tabButton.textContent = tabNames[i];
      tabContainer.appendChild(tabButton);
    } 
  })();
  tabContainer.firstChild.classList.add('selected');
  content.appendChild(tabContainer);
  home();
})()

function showPage(e) {
  console.log(e);
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.classList.remove('selected'));
  e.target.classList.add('selected');
  while (content.childElementCount > 1) {
    content.removeChild(content.lastChild);
  }
  if (e.target.classList[0] === "tab-1") {
    menu();
  } else if (e.target.classList[0] === "tab-0") {
    home();
  }
};