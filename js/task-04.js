const counter = document.querySelector('#counter');
const btnDecrement = document.querySelector('[data-action = "decrement"]');

const btnIncrement = document.querySelector('[data-action = "increment"]');

let valueEl = counter.querySelector('#value');
let counterValue = 0;
btnDecrement.addEventListener('click', function() {
    counterValue -=1;
    valueEl.textContent = counterValue;
    
});
btnIncrement.addEventListener('click', function() {
   counterValue +=1;
   valueEl.textContent = counterValue;
    
});
