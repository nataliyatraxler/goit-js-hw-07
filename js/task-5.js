// Функція для генерації випадкового HEX кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Захоплюємо елементи
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

// Додаємо обробник події на кнопку
changeColorButton.addEventListener('click', () => {
  // Генеруємо новий випадковий колір
  const newColor = getRandomHexColor();

  // Змінюємо фон <body> на новий колір
  body.style.backgroundColor = newColor;

  // Встановлюємо текст у span.color на новий колір
  colorSpan.textContent = newColor;
});
