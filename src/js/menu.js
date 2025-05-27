import { updateOverlayState } from './overlay';

export function initMenu() {
  const burgerOpen = document.querySelector('.header__icon--burger');
  const burgerClose = document.querySelector('.menu__header--icon-burger');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');

  const openMenu = () => {
    menu.classList.add('menu--open');
    updateOverlayState();
  };

  const closeMenu = () => {
    menu.classList.remove('menu--open');
    updateOverlayState();
  };

  if (burgerOpen) burgerOpen.addEventListener('click', openMenu);
  if (burgerClose) burgerClose.addEventListener('click', closeMenu);

  if (overlay) overlay.addEventListener('click', closeMenu);
}
