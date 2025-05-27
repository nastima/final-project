import '../scss/style.scss'
import './button'
import './overlay'
import Swiper from 'swiper';

import { initMenu } from './menu';
import { initModalCall } from './modal-call';
import { initModalFeedback } from './modal-feedback';
import { updateOverlayState } from './overlay';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initModalCall();
  initModalFeedback();
});



'use strict';

let brandsSwiper = null;
let devicesSwiper = null;
let priceSwiper = null;



// Инициализация свайпера
function initSwiper() {
  // Brands swiper
  if (window.innerWidth <= 767 && !brandsSwiper) {
    brandsSwiper = new Swiper('.brands__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.brands-pagination',
        clickable: true,
      },
      simulateTouch: true,
    });
  } else if (window.innerWidth > 767 && brandsSwiper) {
    brandsSwiper.destroy(true, true);
    brandsSwiper = null;
  }

  // Devices swiper
  if (window.innerWidth <= 767 && !devicesSwiper) {
    devicesSwiper = new Swiper('.devices__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.devices-pagination',
        clickable: true,
      },
      simulateTouch: true,
    });
  } else if (window.innerWidth > 767 && devicesSwiper) {
    devicesSwiper.destroy(true, true);
    devicesSwiper = null;
  }

  // Price swiper (новый свайпер)
  if (window.innerWidth <= 767 && !priceSwiper) {
    priceSwiper = new Swiper('.price__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.price-pagination', // Убедитесь, что этот элемент есть в разметке
        clickable: true,
      },
      simulateTouch: true,
    });
  } else if (window.innerWidth > 767 && priceSwiper) {
    priceSwiper.destroy(true, true);
    priceSwiper = null;
  }
}

let menuItems = document.getElementsByClassName('scroll__menu-item');

function activateTab(target) {
  for (let j = 0; j < menuItems.length; j++) {
    menuItems[j].classList.remove('scroll__menu-item--active');
  }
  target.classList.add('scroll__menu-item--active');
}

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('focus', function(event) {
    activateTab(event.currentTarget);
  });
}


window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
window.addEventListener('resize', updateOverlayState);


