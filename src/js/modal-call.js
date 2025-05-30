import { updateOverlayState } from './overlay';

export function initModalCall() {
  const modal = document.querySelector('.modal-call');
  const openBtn = document.querySelector('.click-phone');
  const closeBtn = document.querySelector('.modal-call__header-button');
  const overlay = document.querySelector('.overlay');

  const openModal = () => {
    modal.classList.add('modal-call--open');
    updateOverlayState();
  };

  const closeModal = () => {
    modal.classList.remove('modal-call--open');
    updateOverlayState();
  };

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (overlay) overlay.addEventListener('click', closeModal);
}

