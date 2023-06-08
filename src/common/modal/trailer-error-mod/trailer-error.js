// Отримання посилання на модальне вікно
const errorModal = document.querySelector('.error-modal');

// Відображення модального вікна при помилці
function displayErrorModal() {
  errorModal.style.display = 'block';
}

// Приховання модального вікна
function hideErrorModal() {
  errorModal.style.display = 'none';
}

// Виклик функції displayErrorModal() при помилці
function watchTrailer() {
  // Код, що призводить до помилки
  try {
    // Виконання деструктуризації властивості 'data', яка викликає помилку
    const { data } = undefined;
    // Інші дії з об'єктом 'data' (не досяжні в даному прикладі)
  } catch (error) {
    // Перевірка типу помилки
    if (error instanceof TypeError) {
      displayErrorModal(); // Відображення модального вікна
    }
  }
}

// Отримання посилання на кнопку закриття помилки
const closeErrorButton = document.querySelector('.close-error');

// Додавання обробника події для кнопки закриття помилки
closeErrorButton.addEventListener('click', hideErrorModal);
