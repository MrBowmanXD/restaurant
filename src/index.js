import homepage from './homepage';
import menu from './menu';
import './style.css';

const content = document.querySelector('#content');

console.log(content);

content.appendChild(homepage());

function menuDOM() {
  const Menu = document.querySelector('.menu');
  if (Menu) {
    Menu.addEventListener('click', function () {
      content.removeChild(homepage());
      content.appendChild(menu());
    });
  }
}

menuDOM();
