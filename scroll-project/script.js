let button = document.querySelector('button');
let links = document.querySelector('.links');
let image = document.querySelector('.image')
button.addEventListener('click', () => {
    links.classList.toggle('show-links');
    image.classList.toggle('show-image');
})

// setting the date functionality

let date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();