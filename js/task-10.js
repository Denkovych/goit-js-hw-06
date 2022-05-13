const refs = {
  control : document.querySelector('#control'),
  inputEl : document.querySelector('[type = number]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
  }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
refs.inputEl.addEventListener('input',  ()=> {
  refs.btnCreate.addEventListener('click', createBoxes);
  
function createBoxes(amount){
  amount = refs.inputEl.value; 
    console.log(amount);
    let allDiv = document.createDocumentFragment();
    for(let i = 0; i < amount; i+=1){
      let htmlDiv =  document.createElement("div");
      let basicSize = 30; 
      let size = basicSize + i * 10;
    htmlDiv.style.width =`${size}px`;
    htmlDiv.style.height =`${size}px`;
    htmlDiv.style.backgroundColor = getRandomHexColor();
      allDiv.append(htmlDiv);
    }
    refs.boxes.append(allDiv);
    console.log(refs.boxes);
  }
})


 

  
