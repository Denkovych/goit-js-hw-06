const styleInput = document.querySelector('style');
const inputEl = document.querySelector('#validation-input');
const lengthEl = inputEl.getAttribute('data-length');
const ifLength = Number(lengthEl.value);

inputEl.addEventListener('input', ()=>{
    
inputEl.addEventListener('blur', ()=>{
    if(inputEl.value.length < ifLength || inputEl.value.length > ifLength ){
      inputEl.classList.add('invalid');    
    } else if(inputEl.value.length == ifLength ){
        inputEl.classList.add('valid');
    }
    
})
})
