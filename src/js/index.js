import '../scss/style.scss'
import Swiper from 'swiper';


'use strict';

let buttonHidden = document.querySelector('.button-hidden');
let arrowUp = document.querySelector('.button-up');
let text = document.querySelector('.button-text');
let allIcons = document.querySelectorAll('.swiper-slide');
let brandsSwiper = null;
let devicesSwiper = null;

// Показываем/скрываем иконки
function updateIcons(showAll) {
  const width = window.innerWidth;

  if (width <= 767) {
    // Мобильный свайпер — ничего не скрываем
    for (let i = 0; i < allIcons.length; i++) {
      allIcons[i].classList.remove('brands__icon-hidden');
      allIcons[i].style.display = 'flex';
    }
  } else if (width >= 768 && width <= 1119) {
    // Планшет — скрыты иконки с классом
    for (let i = 0; i < allIcons.length; i++) {
      const icon = allIcons[i];
      if (icon.classList.contains('brands__icon-hidden')) {
        icon.style.display = showAll ? 'flex' : 'none';
      } else {
        icon.style.display = 'flex';
      }
    }
  } else {
    // Десктоп — скрываем последние 3
    for (let i = 0; i < allIcons.length; i++) {
      if (i >= allIcons.length - 3) {
        allIcons[i].style.display = showAll ? 'flex' : 'none';
      } else {
        allIcons[i].style.display = 'flex';
      }
    }
  }
}

// Обновление состояния кнопки и стрелки
function updateButtonState(showAll) {
  if (showAll) {
    text.textContent = 'Скрыть';
    arrowUp.classList.remove('arrow--rotated'); // стрелка вверх
  } else {
    text.textContent = 'Показать все';
    arrowUp.classList.add('arrow--rotated'); // стрелка вниз
  }
}


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
}

// Клик по кнопке
buttonHidden.addEventListener('click', function () {
  const isExpanded = text.textContent === 'Скрыть';
  const showAll = !isExpanded;
  updateIcons(showAll);
  updateButtonState(showAll);
});

// Начальное состояние
function initOnLoad() {
  const width = window.innerWidth;

  if (width >= 768) {
    updateIcons(false);
    updateButtonState(false);
  }

  initSwiper();
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
document.addEventListener('DOMContentLoaded', initOnLoad);


