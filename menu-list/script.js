const menu = [
    {
        id: 1,
        title: 'butttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: 'images/img-1.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
    {
        id: 2,
        title: 'dinner double',
        category: 'lunch',
        price: 12.99,
        img: 'images/img-2.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
    {
        id: 3,
        title: 'country delight',
        category: 'lunch',
        price: 8.99,
        img: 'images/img-2.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
    {
        id: 1,
        title: 'orco dream',
        category: 'breakfast',
        price: 15.99,
        img: 'images/img-4.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
    {
        id: 1,
        title: 'fluffy doughnut',
        category: 'breakfast',
        price: 7.99,
        img: 'images/img-9.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
    {
        id: 1,
        title: 'creamy milkshake',
        category: 'shakes',
        price: 15.99,
        img: 'images/img-7.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
    {
        id: 1,
        title: 'meat attack',
        category: 'lunch',
        price: 18.99,
        img: 'images/img-6.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
    {
        id: 1,
        title: 'american classic',
        category: 'breakfast',
        price: 30.99,
        img: 'images/img-5.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
    {
        id: 1,
        title: 'cripsy fries',
        category: 'lunch',
        price: 11.99,
        img: 'images/img-3.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
    {
        id: 1,
        title: 'hamburger',
        category: 'breakfast',
        price: 5.99,
        img: 'images/img-1.jpeg',
        desc: `Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eligendi officiis ab, nihil
        reprehenderit tempore cum quae accusantium
        dolores?`
    },
]

//id, title, category, price, img desc
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
       let filtered = menu.filter(ele => {
            return ele.category == event.currentTarget.dataset.id;
        });
        console.log(filtered);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
})



let sectionCenter = document.querySelectorAll('.section-center');
function displayMenuItems(menuItems) {
    let filtered = menuItems.map(item => {
        return `<article class="article-parent" >
        <!-- change -->
        <img src=${item.img} alt="Buttermilk" class="image">
        <div class="description">
            <div class="title-container">
                <h3 class="title">${item.title}</h3>
                <h3 class="price">${item.price}</h3>
            </div>
            <p class="info">
               ${item.desc};
            </p>
        </div>
    </article>`
    });
    let displayMenu = filtered.join("");
    sectionCenter.innerHTML = displayMenu;
};