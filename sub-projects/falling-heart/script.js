
function run() {
    let emoji = document.createElement('div');
    emoji.classList.add('hearts')
    emoji.innerText = '💙'
    emoji.style.left = Math.random() * 100 + 'vw'
    document.body.appendChild(emoji);
    emoji.style.animationDuration = Math.random() * 5 + 's'
    setTimeout (() => {
        emoji.remove();
    }, 5000);
}
setInterval(run, 100);


