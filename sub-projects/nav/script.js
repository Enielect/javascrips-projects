let container = document.querySelector('.container');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    container.classList.toggle('active');
})