window.addEventListener('click', function () {
    console.log('window');
}, false);
// true ==> event capturing   
// false(default) ==> event bubble

document.addEventListener('click', function () {
    console.log('document');
}, false);

document.querySelector('.div2').addEventListener('click', function (e) {
    // e.stopPropagation(); // this will stop propagation of event either on top or bottom
    console.log('div2');
}, { once: true }); // {once : true} => event Will fire only once after that this event will skipped 

document.querySelector('.div1').addEventListener('click', function (e) {
    console.log('div1');

}, false);

document.querySelector('button').addEventListener('click', function (e) {
    // e.preventDefault();
    console.log(e.target.innerText = 'clicked');
}, false);

