

document.addEventListener('DOMContentLoaded', () => {
  const burgerOpen = document.querySelector('.header__icon--burger');
  const burgerClose = document.querySelector('.menu__header--icon-burger');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');

  const toggleMenu = () => {
    menu.classList.toggle('menu--open');
    overlay.classList.toggle('overlay--visible');
  };

  if (burgerOpen) burgerOpen.addEventListener('click', toggleMenu);
  if (burgerClose) burgerClose.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', toggleMenu);
});
