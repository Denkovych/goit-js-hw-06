const sizeControlEl = document.querySelector("#font-size-control");
const inputValueMin = sizeControlEl.getAttribute('min');
const inputValueMax = sizeControlEl.getAttribute('max');
const textEl= document.querySelector('#text');
sizeControlEl.addEventListener('input', ()=>{
    if(sizeControlEl.value >= inputValueMin || sizeControlEl.value <= inputValueMax){
        textEl.style.fontSize = sizeControlEl.value+'px';
    }
})