let buttons = document.querySelectorAll('.question-btn');

// buttons.forEach(ele => {
//     ele.addEventListener('click', event => {
//         let parent = event.currentTarget.parentElement.parentElement;
//         parent.classList.toggle('show-text');
//     });
// });

let questions = document.querySelectorAll('.question');
questions.forEach(item => {
    let button = item.querySelector('.question-btn');
    button.addEventListener('click', event => {
        item.classList.toggle('show-text');
        questions.forEach(ele => {
            if(ele != item) ele.classList.remove('show-text');
        })
    })
})