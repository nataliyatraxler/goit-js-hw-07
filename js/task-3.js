// Знаходимо елементи input та span
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Додаємо обробник події для поля введення
nameInput.addEventListener('input', () => {
  // Отримуємо значення інпуту, обрізаємо пробіли по краях
  const nameValue = nameInput.value.trim();
  
  // Якщо інпут порожній або містить лише пробіли, виводимо "Anonymous"
  if (nameValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameValue;
  }
});
