/*
document.addEventListener('DOMContentLoaded', () => {
  const phoneButton = document.querySelector('.click-phone');
  const modal = document.querySelector('.modal-call');
  const modalClose = document.querySelector('.modal-call__header-button');
  const overlay = document.querySelector('.overlay');

  if (phoneButton) {
    phoneButton.addEventListener('click', () => {
      console.log('Клик по кнопке "Заказать звонок"');
      modal.classList.add('modal-call--open');
      overlay.classList.add('overlay--visible');
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      console.log('Клик по кнопке закрытия модалки');
      modal.classList.remove('modal-call--open');
      overlay.classList.remove('overlay--visible');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      console.log('Клик по оверлею');
      modal.classList.remove('modal-call--open');
      overlay.classList.remove('overlay--visible');
    });
  }
});
*/
