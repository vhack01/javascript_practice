const collapser_btn = document.querySelectorAll('.collapse__icon');
const collapser_list = document.querySelectorAll('.list__item');

console.log(collapser_list);
collapser_list.forEach(val => {
    val.addEventListener('click', function (e) {
        this.classList.toggle('collapse--expand');
    });
});
