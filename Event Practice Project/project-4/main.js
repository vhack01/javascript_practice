const input = document.querySelector('#taskbar-input');
const btn_add = document.querySelector('.btn--add');
const ul = document.querySelector('.list');

let btn_check = null;
let btn_delete = null;

btn_add.addEventListener('click', function () {
    let task_message = input.value;
    if (task_message === '')
        alert('Please enter the task.');
    else {

        let li = `
            <li class="list__item">
                <p class="task__text">${task_message}</p>
                <div class="btn--control">
                    <button type="submit" class="btn btn--check">
                        <img src="./images/check.svg" alt="add">
                    </button>
                    <button type="submit" class="btn btn--delete">
                        <img src="./images/delete.svg" alt="add">
                    </button>
                </div>
            </li>`;

        ul.innerHTML += li;

        btn_check = document.querySelectorAll('.btn--check');
        btn_check.forEach(element => {
            element.addEventListener('click', taskCompleted);
        });

        btn_delete = document.querySelectorAll('.btn--delete');
        btn_delete.forEach(element => {
            element.addEventListener('click', taskDelete);
        });
    }
    input.value = '';
});

function taskCompleted(e) {
    let done = (this.parentElement).previousElementSibling;
    done.style.textDecoration = 'line-through';

    let parent_li = this.parentElement.parentElement;

}

function taskDelete(e) {
    let parent_li = this.parentElement.parentElement;
    parent_li.remove();
}
