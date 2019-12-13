/* eslint-disable no-undef */
import homePage from './pages/home.js';
import foodMenu from './pages/foodMenu.js';
import contactUs from './pages/contact.js';
import './css/style.css';

const pageController = (mainDiv) => {
  document.getElementById('home')
    .addEventListener('click', e => {
      homePage(mainDiv);
    });
  document.getElementById('food-menu')
    .addEventListener('click', e => {
      foodMenu(mainDiv);
    });
  document.getElementById('contact')
    .addEventListener('click', e => {
      contactUs(mainDiv);
    });
};

const mainDiv = document.getElementById('content');
homePage(mainDiv); // root page

pageController(mainDiv);
