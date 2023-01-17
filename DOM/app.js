// DOM manupulation

//getElementById
const heading = document.getElementById('main-heading');
heading.style.color = 'orange';


//getElementByClassName()
const list = document.getElementsByClassName('list-items');
for (let item of list)
    console.log(item);


//getElementByTagName()
const tags = document.getElementsByTagName('li');
for (let item of tags)
    console.log(tags);


//querySelector()
const query = document.querySelector('li');
console.log('querySelector:', query);
    
    
console.clear();
//querySelectorAll()
const queryAll = document.querySelectorAll('#main-heading');
console.log(queryAll)


