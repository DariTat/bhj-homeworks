const size = document.querySelectorAll('.font-size');
let sizeArr = Array.from(size);
const links = Array.from(document.querySelectorAll('a'));
let book = document.querySelector('.book');
//function actived(){
    
//}

sizeArr.forEach((item) => item.addEventListener('click', ()=>{
    
    let index = sizeArr.findIndex((item) => item.className.includes('font-size_active'));
    sizeArr[index].classList.remove('font-size_active');
    
    if(item.classList.contains('font-size_small')){
        book.setAttribute('class', 'book_fs-small');
      
    } else if(item.classList.contains('font-size_big')){
        book.setAttribute('class', 'book_fs-big');
       
    } else {
        book.setAttribute('class', 'book');
    }
    item.classList.add('font-size_active');
}));

links.forEach((item)=> item.onclick = function(){
    return false;
})