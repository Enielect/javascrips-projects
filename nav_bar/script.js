let nav_toggle = document.querySelector('.nav-toggle');
let links = document.querySelector('.links')
nav_toggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
})