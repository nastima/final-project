
export function updateOverlayState() {
  const overlay = document.querySelector('.overlay');
  const menu = document.querySelector('.menu');
  const modalCall = document.querySelector('.modal-call');
  const modalFeedback = document.querySelector('.modal-feedback');

  if (!overlay) return;

  const isMenuOpen = menu && menu.classList.contains('menu--open');
  const isCallOpen = modalCall && modalCall.classList.contains('modal-call--open');
  const isFeedbackOpen = modalFeedback && modalFeedback.classList.contains('modal-feedback--open');
  const isModalOpen = isCallOpen || isFeedbackOpen;

  const width = window.innerWidth;

  // Оверлей виден, если открыто меню или модалка
  if (isMenuOpen || isModalOpen) {
    overlay.classList.add('overlay--visible');
  } else {
    overlay.classList.remove('overlay--visible');
  }

  // Убираем класс с оверлея по умолчанию
  overlay.classList.remove('overlay--overlay-above-menu');

  // Логика для разных экранов
  if (width >= 1440) {
    // При большом экране, если есть модалка — оверлей выше меню
    if (isModalOpen) {
      overlay.classList.add('overlay--overlay-above-menu');
    }
  } else if (width >= 768) {
    // На 768+ при открытой модалке — оверлей выше меню
    if (isModalOpen) {
      overlay.classList.add('overlay--overlay-above-menu');
    }
  } else {
    // Меньше 768 — оверлей ниже меню, или его вообще можно не показывать,
    // но мы показываем только если открыты модалки
    if (isModalOpen) {
      overlay.classList.add('overlay--overlay-above-menu');
    } else {
      overlay.classList.remove('overlay--visible');
    }
  }
}
