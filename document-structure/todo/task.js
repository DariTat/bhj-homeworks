let input = document.querySelector('.tasks__input');
let list = document.querySelector('.tasks__list');
let form = document.querySelector('.tasks__control');

form.onsubmit = function(){
    if(input.value == ''){
        return false;
    }
    list.innerHTML += `
    <div class="task">
    <div class="task__title">${input.value}</div>
    <a href="#" class="task__remove">x</a>
    </div>`
    form.reset();
    let remove = Array.from(document.querySelectorAll('.task__remove'));
    
    remove.forEach((item)=> item.addEventListener('click', ()=>{
        item.parentElement.remove();
    }) )
    return false;
}



