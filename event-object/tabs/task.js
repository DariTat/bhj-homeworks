const tab = document.querySelectorAll('.tab');
let tabArr = Array.from(tab);
const content = document.querySelectorAll('.tab__content');
let contentArr = Array.from(content);

function actived(){
    if(document.querySelector('.tab_active')){
        let index = tabArr.indexOf(document.querySelector('.tab_active'));
        tabArr[index].classList.remove('tab_active');
        contentArr[index].classList.remove('tab__content_active'); 
    }
    this.classList.add('tab_active');
    let index = tabArr.indexOf(this);
    contentArr[index].classList.add('tab__content_active');
}

tabArr.forEach((item)=> item.addEventListener('click', actived))