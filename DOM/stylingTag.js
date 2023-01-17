const list_items = document.querySelectorAll('.list-items');
let c = 0;
for (let l of list_items) {
    l.style.color = 'red';
    l.innerHTML += ' - ' + c++;
}


//----- Creating Element ----------

const ul = document.querySelector('ul');
const li1 = document.createElement('li');
ul.append(li1);


const span1 = document.createElement('span');
li1.append(span1);
span1.innerText = 'Newly created element'


//==============  Modifying Attribiutes and classes ==========

// Method - 1
// li1.setAttribute('class', 'list-items');
// li1.removeAttribute('class');

// ------- Method - 2 : adding class ------
li1.classList.add('list-items');
// li1.classList.remove('list-items');
console.log(li1.classList.contains('list-items'));

 
// Remove elements
// li1.remove();




//-------- Text Formatting ------
const list_item = document.querySelector('.list-items');
console.log(list_item.innerText);
console.log(list_item.textContent);
console.log(list_item.innerHTML);







