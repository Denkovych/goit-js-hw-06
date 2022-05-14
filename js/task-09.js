const widget = document.querySelector('.widget');
const nameBackgroundColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btnChangeColor.addEventListener('click', onWidjetClick);
function onWidjetClick (event){
  document.body.style.backgroundColor = getRandomHexColor();
  nameBackgroundColor.textContent = getRandomHexColor();
}