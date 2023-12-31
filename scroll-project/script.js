let button = document.querySelector('.button-toggle');
let linksContainer = document.querySelector('.links');
let links = document.querySelector('.link-container') 



// setting the date functionality

let date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links
button.addEventListener('click', () => {
    // calculating the height 
    // Element.getBoundingClientRect () method returns the size of an Element
    // and its position relative to the viewport
    // links.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;  
    const linksHeight = links.getBoundingClientRect().height;
    console.log(containerHeight)
    console.log(linksHeight)
    if(containerHeight == 0) {
        linksContainer.style.height = `${linksHeight}px`
    }else {linksContainer.style.height = 0;}
});

// fixed nav-bar
// pageYOffset is a read - only window property that returns the 
// number of pixels the document has been scrolled vertically 
const navbar = document.getElementById('nav');
const toplink = document.querySelector('.button-top');

window.addEventListener('scroll', () => {
    let navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight)
    let scrollHeight = window.pageYOffset;
    console.log(scrollHeight)
    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500) {
        toplink.classList.add('show-link');
    }else {
        toplink.classList.remove('show-link')
    }
});

// select links 

//offsetTop
//a number represeneting the top position of an element in pixel

//with the window scrollTo method, we just say where we want to scroll to
//window.scrollTo({}); takes an object

let defScroll = document.querySelectorAll('.scroll-link');
defScroll.forEach(ele => {
    ele.addEventListener('click', (event) => {
        event.preventDefault();
        let id = event.currentTarget.getAttribute('href').slice(1);
        let element = document.getElementById(id);
        let navHeight = nav.getBoundingClientRect().height;
        let containerHeight = linksContainer.getBoundingClientRect().height;
        let fixedNav = nav.classList.contains('fixed-nav');
        let positionTop = element.offsetTop - navHeight;
        if(!fixedNav) positionTop = positionTop - navHeight;
        if(navHeight > 70) positionTop = positionTop + containerHeight;
        window.scrollTo({
            left:0,
            top: positionTop
        });
        linksContainer.style.height = 0;
    });
});

//contains method for classList checks whether an element
//has a particular class