const styleInput = document.querySelector('style');
const inputEl = document.querySelector('#validation-input');
const lengthEl = inputEl.getAttribute('data-length');

inputEl.addEventListener('input', ()=>{
    
inputEl.addEventListener('blur', ()=>{
    if(inputEl.value.length < lengthEl || inputEl.value.length > lengthEl ){
      inputEl.classList.add('invalid');    
    } else if(inputEl.value.length == lengthEl ){
        inputEl.classList.add('valid');
    }
})
})
