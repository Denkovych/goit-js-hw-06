const categories = document.querySelectorAll('li.item');
console.log(`Number of categories:${categories.length}`);

categories.forEach((number) => {
    const title =  number.querySelector('h2');
    const list = number.querySelector('ul');
    const elements = list.querySelectorAll('li');

    console.log(`Categories: ${title.textContent}`);
    console.log(`Elements: ${elements.length}`);  
});
