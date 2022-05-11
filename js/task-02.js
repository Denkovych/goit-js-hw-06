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
  
ingredients.forEach((number) =>{
const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.textContent = number;
listIngr.append(newItem);
})
