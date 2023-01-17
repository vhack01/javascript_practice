
const reveal = document.querySelector('.reveal-btn');
const content = document.querySelector('.hidden-content');

reveal.addEventListener('click', revealContent);

function revealContent() {
    console.log(content.classList.contains('hidden-content'));
    if (content.classList.contains('hidden-content'))
        content.classList.remove('hidden-content');
    else
        content.classList.add('hidden-content');
}

