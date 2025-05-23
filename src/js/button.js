
// Скрыть/показать иконки, когда нажимаем на кнопку
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      console.log('Кнопка нажата');

      const section = this.closest('.brands') || this.closest('.devices');
      console.log('Нашли секцию:', section);

      if (!section) return;

      const wrapper = section.querySelector('.swiper-wrapper');
      const arrow = this.querySelector('.button-down');
      const buttonText = this.querySelector('.button-text');

      console.log('wrapper:', wrapper);
      console.log('arrow:', arrow);
      console.log('buttonText:', buttonText);

      if (!wrapper || !arrow || !buttonText) return;

      const isExpanded = wrapper.classList.toggle('expanded');
      arrow.classList.toggle('arrow--rotated');

      if (isExpanded) {
        buttonText.textContent = 'Скрыть';
      } else {
        buttonText.textContent = 'Показать все';
      }
    });
  }
});
