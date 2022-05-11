
const btnDecrement = document.querySelector('[data-action = "decrement"]');
console.log(btnDecrement);
const btnIncrement = document.querySelector('[data-action = "increment"]');
console.log(btnIncrement);
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
