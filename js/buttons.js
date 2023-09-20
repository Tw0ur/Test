const customSelects = document.querySelectorAll('.custom-select');

customSelects.forEach(customSelect => {
  const selectedOption = customSelect.querySelector('.selected-option');
  const options = customSelect.querySelector('.options');
  const optionElements = customSelect.querySelectorAll('.option');

  selectedOption.addEventListener('click', () => {
    const rect = customSelect.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const spaceBelow = rect.bottom + 200;

    if ( spaceBelow > windowHeight) {
      // Если места сверху больше или места снизу недостаточно, показываем опции вверху
      options.style.top = 'auto';
      options.style.bottom = '56px';
    } else {
      // Иначе, показываем опции внизу
      options.style.top = '56px';
      options.style.bottom = 'auto';
    }

    options.style.display = options.style.display === 'block' ? 'none' : 'block';
  });

  optionElements.forEach(option => {
    option.addEventListener('click', () => {
      selectedOption.textContent = option.textContent;
      options.style.display = 'none';
      // Вы можете использовать option.dataset.value для получения значения
      // Например, console.log(option.dataset.value);
    });
  });

  document.addEventListener('click', (event) => {
    if (!customSelect.contains(event.target)) {
      options.style.display = 'none';
    }
  });
});
