import '../scss/style.scss'
import './menu'
import './button'
import Swiper from 'swiper';


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


window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);


