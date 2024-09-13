
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      alert('All form fields must be filled in');
      return;
    }

    // Збираємо значення інпутів у вигляді об'єкта
    const formData = {
      email: email,
      password: password
    };

    // Виводимо об'єкт у консоль
    console.log(formData);

    // Очищення форми після сабміту
    form.reset();
  });
});
