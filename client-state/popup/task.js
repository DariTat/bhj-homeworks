const close = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}
if(getCookie('info') !== 'modal_close'){
    modal.classList.add('modal_active');
} else {
   modal.classList.remove('modal_active');
}
close.addEventListener('click', ()=>{
    modal.classList.remove('modal_active');
    setCookie('info', 'modal_close');
})






