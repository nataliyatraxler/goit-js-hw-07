// Функція для генерації випадкового HEX кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Захоплюємо необхідні елементи
const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Функція для створення колекції div
function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10; // кожен наступний елемент збільшується на 10px
  }

  boxesContainer.append(...boxes);
}

// Функція для очищення колекції div
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Обробник події для кнопки Create
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes(); // очищаємо попередні елементи
    createBoxes(amount); // створюємо нову колекцію
    input.value = ''; // очищуємо input після створення
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

// Обробник події для кнопки Destroy
destroyBtn.addEventListener('click', destroyBoxes);
