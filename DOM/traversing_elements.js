// DOM Manipulation

//========= Parent Node Traversal =========

const ul = document.querySelector('ul');

console.log(ul.parentNode); // ul.parentNode.parentNode --> just add .parentNode for upper node
console.log(ul.parentElement);

const html = document.documentElement;
console.log(html);


//========= Child Node Traversal =============

// ul.childNodes
console.log(ul.childNodes);
// ul.firstChild.style.backgroundColor = 'red';
// console.log(ul.lastChild);
// ul.lastChild.style.backgroundColor = 'blue';

console.log(ul.children);
const f_child = ul.firstElementChild;
f_child.style.backgroundColor = 'red';
const l_child = ul.lastElementChild;
l_child.style.backgroundColor = 'gold';


console.clear()


//========= Sibling Node Traversal =============
const li = document.querySelector('li')
li.style.fontSize = '4rem';
// li.previousElementSibling.style.color = 'green'; // there is no previous child of li
li.nextElementSibling.style.color = 'green';

