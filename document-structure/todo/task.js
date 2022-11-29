let input = document.querySelector('.tasks__input');
let list = document.querySelector('.tasks__list');
let form = document.querySelector('.tasks__control');

form.onsubmit = function(){
    input.value = input.value.trim();
    if(input.value == ''){
        return false;
    }
    list.insertAdjacentHTML ("afterbegin",  `
    <div class="task">
    <div class="task__title">${input.value}</div>
    <a href="#" class="task__remove">x</a>
    </div>`);
    form.reset();
    let remove = document.querySelector('.task__remove');
    remove.addEventListener('click', ()=>{
        remove.parentElement.remove();
    }) 
    return false;
}



