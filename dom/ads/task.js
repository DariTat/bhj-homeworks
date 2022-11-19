const rotator = document.querySelector(".rotator");
let el = rotator.firstElementChild;

function showRotator(){
    el.classList.remove('rotator__case_active');
    el = el.nextElementSibling;
    if(el == null){
        el = rotator.firstElementChild;
    }
    el.style.color = el.dataset.color
    el.classList.add('rotator__case_active');
    
    let speed = el.dataset.speed;
    timer = setTimeout(showRotator, speed);
}

let timer = setTimeout(() => {
    showRotator()
}, 1000);
