const text = 'I am the best frontEnd developer in the world!!!!!';
const container = document.querySelector('.container');

let i = 1;

function writeText() {
    let content = text.slice(0, i);
    i++;
    container.textContent = content;
}

setInterval(() => {
    writeText();
}, 100)


