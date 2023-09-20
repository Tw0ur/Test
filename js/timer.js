function startCountdown() {
  const countdownElement = document.querySelector('.countdown');
  const endTime = new Date(); // Установите дату и время завершения таймера здесь
  endTime.setHours(endTime.getHours() + 4,endTime.getMinutes() + 51, endTime.getSeconds() + 16); // Например, установим время на 4 часа вперед

  function updateCountdown() {
    const now = new Date();
    const timeDifference = endTime - now;

    if (timeDifference <= 0) {
      countdownElement.textContent = '04:51:16';
      clearInterval(interval);
    } else {
      const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');

      countdownElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }

  updateCountdown(); // Обновим таймер сразу после запуска

  const interval = setInterval(updateCountdown, 1000); // Обновляем каждую секунду
}

startCountdown(); // Запускаем таймер