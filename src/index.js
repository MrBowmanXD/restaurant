import homepage from './homepage';
import menu from './menu';
import './style.css';

document.body.appendChild(homepage());

function menuDOM() {
  const Menu = document.querySelector('.menu');
  if (Menu) {
    Menu.addEventListener('click', function () {
      document.body.removeChild(homepage());
      document.body.appendChild(menu());
    });
  }
}

menuDOM();
