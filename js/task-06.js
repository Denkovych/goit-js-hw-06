const styleInput = document.querySelector('style');
const inputEl = document.querySelector('#validation-input');
const lengthEl = inputEl.getAttribute('data-length');
const ifLength = Number(lengthEl);



inputEl.addEventListener('blur', addClassList) ;
  //const ifInput = Number(inputEl.value.length);
    
  function addClassList(){
  if( inputEl.value.length === Number(lengthEl) ){
      inputEl.classList.add('valid');    
    } else{ 
        inputEl.classList.add('invalid');
    }
    console.log(Number.isNaN(Number(lengthEl)));
    console.log(Number.isNaN(inputEl.value.length));
  }

  
    

