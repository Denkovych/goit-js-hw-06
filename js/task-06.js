const styleInput = document.querySelector('style');
const inputEl = document.querySelector('#validation-input');
const lengthEl = inputEl.getAttribute('data-length');
const ifLength = Number(lengthEl);



inputEl.addEventListener('blur', addClassList) ;
  //const ifInput = Number(inputEl.value.length);
    
  function addClassList(){
  if( inputEl.value.length === Number(lengthEl) ){
      inputEl.classList.add('valid');
      inputEl.classList.remove('invalid');  
    } else{ 
      inputEl.classList.remove('valid');
      inputEl.classList.add('invalid');
    }
    console.log(Number(lengthEl));
    console.log(inputEl.value.length);
  }

  
    

