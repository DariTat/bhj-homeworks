const block = document.querySelectorAll('.reveal');
let blockArr = Array.from(block);

function showBlock(){
    blockArr.forEach((item) =>{
        const {top, bottom} = item.getBoundingClientRect();

        if(bottom < 0){
            item.classList.remove('reveal_active');
            return false; 
             
        }
        if(top > window.innerHeight){
            item.classList.remove('reveal_active');
            return false;
        }
        item.classList.add('reveal_active');
        }
    )
}

window.addEventListener("scroll", showBlock);