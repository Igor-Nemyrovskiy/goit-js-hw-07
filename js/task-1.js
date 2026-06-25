const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector("h2");
  const elements = category.querySelectorAll("ul li");

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
