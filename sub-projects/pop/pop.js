const button = document.querySelector('.button');
const container = document.querySelector('.container')
button.addEventListener('click', () => {
   creatPop();
})

function creatPop() {
    let ele = document.createElement('div');
    ele.textContent = 'i am eniola';
    ele.classList.add('style');

    container.appendChild(ele);

    setTimeout(() => {
        ele.remove()
    },5000)
    
}