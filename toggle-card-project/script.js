const reviews = [
    {
        id: 1,
        img: 'review_1.jpg',
        name: 'Martha Fernandez',
        job: 'web developer',
        info: `My name is Eniola. I am a frontend developer 
        currently learning javascript. I would love to connect with
        serious people.`
    },
    {
        id: 2,
        img: 'review_3.jpg',
        name: 'Omari Forson',
        job: 'UI/UX Designer',
        info: `Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Praesentium 
        voluptatibus officia, rem aperiam eveniet quidem
         eum iste iure doloribus voluptates quos iusto 
         incidunt officiis dolorem quae, minus debitis,
          inventore voluptatem..`
    },
    {
        id: 3,
        img: 'review_4.jpg',
        name: 'Bruno Maldrin',
        job: 'DevOps Engineer ',
        info: `Edison bulb put a bird on it hublebrag, mafia pok
        heirloom fashion are cray stumptown venmo actually seitan. VHS
        farm-to-table schitx, edison bulb pop-up wolf moon tate bag.`
    },
    {
        id: 4,
        img: 'review_3.jpg',
        name: 'Abayomi Eniola',
        job: 'web developer',
        info: `My name is Eniola. I am a frontend developer 
        currently learning javascript. I would love to connect with
        serious people.`
    }
]

//id, img, name, job, info

let current = 0;
let job = document.getElementById('job');
let author = document.getElementById('name');
let info = document.getElementById('info');
let image = document.getElementById('img');

let button_left = document.querySelector('.btn-left');
let button_right = document.querySelector('.btn-right');

window.addEventListener('DOMContentLoaded', displayInfo);
button_left.addEventListener('click', () => {
    current--;
    if(current < 0) {
        current = reviews.length - 1;
    }
    displayInfo();
});

button_right.addEventListener('click', () => {
    current++;
    if(current > reviews.length - 1) current = 0;
    displayInfo();
});


function displayInfo() {
    const item = reviews[current];
    job.textContent = item.job; 
    info.textContent = item.info;
    author.textContent = item.name; 
    image.src = item.img;
}

