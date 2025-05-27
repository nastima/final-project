import { updateOverlayState } from './overlay';

export function initModalFeedback() {
  const modal = document.querySelector('.modal-feedback');
  const openBtn = document.querySelector('.click-message');
  const closeBtn = document.querySelector('.modal-feedback__header-button');
  const overlay = document.querySelector('.overlay');

  const openModal = () => {
    modal.classList.add('modal-feedback--open');
    updateOverlayState();
  };

  const closeModal = () => {
    modal.classList.remove('modal-feedback--open');
    updateOverlayState();
  };

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (overlay) overlay.addEventListener('click', closeModal);
}
