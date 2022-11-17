const rotator = document.querySelectorAll(".rotator__case");
let rotatorArr = Array.from(rotator);

function showRotator(){
    let index = rotatorArr.findIndex((item) => item.className.includes('rotator__case_active'));
    rotatorArr[index].classList.remove('rotator__case_active');
    (index < (rotatorArr.length - 1))? ++index : index = 0;
    let speed = rotatorArr[index].dataset.speed;
    rotatorArr[index].style.color = rotatorArr[index].dataset.color;
    rotatorArr[index].classList.add('rotator__case_active');  
}

setInterval(() => {showRotator()}, 1000);