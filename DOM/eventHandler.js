function btn1() {
    alert('Button - 1 clicked');
}

//eventListener

const button2 = document.querySelector('.btn-2');
button2.addEventListener('click', btn2);

function btn2() {
    button2.parentElement.style.backgroundColor = 'black';
}

const btn3 = document.querySelector('.btn-3');

btn3.addEventListener('mouseover', function () {
    this.parentElement.style.backgroundColor = 'gold';
});



