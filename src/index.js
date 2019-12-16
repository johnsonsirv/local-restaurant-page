/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import homePage from './pages/home.js';
import foodMenu from './pages/foodMenu.js';
import contactUs from './pages/contact.js';
import './css/style.css';
import importAll from './data';

const pageController = (mainDiv) => {
  const images = importAll(require.context('../src/images/foods/', false, /\.(png|jpg|jpeg)$/));
  document.getElementById('home')
    .addEventListener('click', () => {
      homePage(mainDiv);
    });
  document.getElementById('food-menu')
    .addEventListener('click', () => {
      foodMenu(mainDiv, images);
    });
  document.getElementById('contact')
    .addEventListener('click', () => {
      contactUs(mainDiv);
    });
};

const mainDiv = document.getElementById('content');
homePage(mainDiv);

pageController(mainDiv);
