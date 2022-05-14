const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngr = document.querySelector('#ingredients');
  console.log(listIngr);
const listItem = document.createDocumentFragment();
ingredients.forEach((number) =>{
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = number;
  newItem.innerHTML = number;
  listItem.append(newItem); });
listIngr.append(listItem);