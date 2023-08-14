let button = document.querySelector('.button-toggle');
let links = document.querySelector('.links');

button.addEventListener('click', () => {
    links.classList.toggle('show-links');  
})

// setting the date functionality

let date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links