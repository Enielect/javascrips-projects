let images = document.querySelector('.img-container');
const img = document.querySelectorAll('.img');
let index = 0;


function next() {
    if(index > img.length - 1) {
        index = 0;
    }
    images.style.transform = `translateX(${-index *  500}px)`;
    index++;
}

setInterval(next, 1000);
console.log(images)

console.log(img.length)

