const categories = document.querySelectorAll('li.item');
console.log(`Number of categories:${categories.length}`);

categories.forEach((number) => {
   const categorie =  number.querySelector('h2');
   const list = number.querySelector('ul');
   const elements = list.querySelectorAll('li');

   console.log(`Categories: ${categorie.textContent}`);
    console.log(`Elements: ${elements.length}`);  
});
