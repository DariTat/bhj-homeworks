
const close = document.getElementsByClassName('modal__close');
let closeArray = Array.from(close);
const modal = document.getElementById('modal_main');
modal.classList.add('modal_active');
const modalSuccess = document.getElementById('modal_success');

function modalClose(){
    if(this.className.includes('modal__close_times')){
        modal.style.display = 'none';
        modalSuccess.style.display = 'none';
    }
}
closeArray.forEach((item) => item.onclick = modalClose);

const showSuccess = document.getElementsByClassName('show-success');
let showArray = [...showSuccess];

showArray[0].onclick = function(){
    modalSuccess.style.display = 'flex';
    modal.style.display = 'none';
}