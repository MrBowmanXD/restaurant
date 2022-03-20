import './style.css';

export default function menu() {
  const backgroundImage = document.createElement('div');
  backgroundImage.classList.add('homepage');
  backgroundImage.classList.add('container');
  backgroundImage.classList.add('hero-img');

  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');
  flexContainer.innerHTML = `<ul class="nav-bar">
  <li class="flex-child">Home</li>
  <li class="flex-child">Menu</li>
  <li class="flex-child">About</li>
  <li class="flex-child">Contact</li>
</ul>`;

  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = `<h1>Menu</h1>`;

  const flexContainerCards = document.createElement('div');
  flexContainerCards.classList.add('flex-container__cards');
  flexContainerCards.innerHTML = `<div class="menu-card">
  <h4>Limited time</h4>
  <h2>May special offer</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo reprehenderit consectetur nobis, quod recusandae qui.
  </p>
</div>
<div class="menu-card">
  <h4>Limited time</h4>
  <h2>Daily promotion</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo reprehenderit consectetur nobis, quod recusandae qui.
  </p>
</div>
<div class="menu-card">
  <h4>Limited time</h4>
  <h2>Veteran discount</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo reprehenderit consectetur nobis, quod recusandae qui.
  </p>
</div>`;

  backgroundImage.appendChild(flexContainer);
  backgroundImage.appendChild(title);
  backgroundImage.appendChild(flexContainerCards);

  return backgroundImage;
}
