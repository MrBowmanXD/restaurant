import './style.css';

export default function homepage() {
  const homepage = document.createElement('div');
  homepage.classList.add('homepage');
  homepage.classList.add('container');
  homepage.classList.add('hero-img');

  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');
  flexContainer.innerHTML = `<ul class="nav-bar">
  <li class="flex-child home">Home</li>
  <li class="flex-child menu">Menu</li>
  <li class="flex-child about">About</li>
  <li class="flex-child contact">Contact</li>
</ul>`;

  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = `<h1 class="homepage">Homepage</h1>`;

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  imgContainer.innerHTML = `<img src="../src/logo/Logo_restaurant.png" alt="Logo of the restaurant">`;

  homepage.appendChild(flexContainer);
  homepage.appendChild(title);
  homepage.appendChild(imgContainer);

  return homepage;
}
