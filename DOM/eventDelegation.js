/*
Event Delegation:
    It allows users to append a SINGLE event listener to a parent 
    element that adds it to all its present AND future descendent that
    matches a selector.
*/



document.querySelector('#sports').addEventListener('click', function (e) {
    const target = e.target;
    // console.log(target.getAttribute('id'), ' clicked');
    if (target.matches('li')) {
        target.style.backgroundColor = '#000';
        target.style.color = '#fff';
    }
});

const ul = document.querySelector('ul');
const li = document.createElement('li');
li.setAttribute('id', 'badminton');
li.innerText = 'Badminton';
ul.appendChild(li);




