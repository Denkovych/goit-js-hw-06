const refs = {
  control : document.querySelector('#control'),
  inputEl : document.querySelector('[type = number]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
  

}
console.log(refs.boxes);
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
    for(let i = 0; i < amount; i+=1){
     const htmlDiv =  document.createElement("div");
      let basicSize = 30; 
      let size = basicSize + i * 10;
     htmlDiv.style.width =`${size}px`;
     htmlDiv.style.height =`${size}px`;
     htmlDiv.style.backgroundColor = getRandomHexColor();
    
    refs.boxes.append(htmlDiv);
    console.log(refs.boxes);
    }
  }
})

const div = refs.boxes.querySelectorAll('div');
console.log(div);
 

  
