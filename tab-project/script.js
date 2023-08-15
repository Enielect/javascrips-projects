//target the individual buttons

const contents = document.querySelectorAll('.content');

const btns = document.querySelectorAll('.tab-btn');
btns.forEach(button => {
    button.addEventListener('click', event => {
        event.currentTarget.classList.toggle('clicked-btn');
        btns.forEach(ele => {
            if (ele != event.currentTarget) {
                ele.classList.remove('clicked-btn')
            }
        })
        contents.forEach(content => {
            if(event.currentTarget.dataset.id == content.dataset.name) {
                contents.forEach(ele => {
                    ele.classList.remove('active');
                })
                content.classList.add('active');
            }
        });
    });
});