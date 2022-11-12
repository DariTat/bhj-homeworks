const items = document.querySelectorAll('.dropdown__item');
let itemsArr = Array.from(items);
let value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('.dropdown__link');
let linksArr = Array.from(links);

function showList(){
    list.classList.toggle('dropdown__list_active');
}

function chooseItem(){
    value.textContent = this.textContent;
    list.classList.remove('dropdown__list_active');
    
}

value.addEventListener('click', showList);
itemsArr.forEach((item) => item.addEventListener('click',chooseItem));
linksArr.forEach((item)=> item.onclick = function(){
    return false;
})