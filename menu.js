// Basic interactive feature: show an alert when a user clicks on the category title
document.querySelectorAll('.menu-category h2').forEach((category) => {
  category.addEventListener('click', () => {
    alert(`Viewing items in the ${category.textContent} category!`);
  });
});
