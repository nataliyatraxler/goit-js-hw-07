// Знаходимо список категорій
const categoriesList = document.querySelectorAll('ul#categories li.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// Проходимо кожну категорію та виводимо її заголовок і кількість елементів
categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
