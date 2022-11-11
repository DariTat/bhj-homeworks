let arrowPrev = document.querySelector('.slider__arrow_prev');
let arrowNext = document.querySelector('.slider__arrow_next');

let slider = document.querySelectorAll('.slider__item');
let sliderArr = Array.from(slider);
let indexSlider = 0;
function next(){ 
    indexSlider = sliderArr.findIndex((item) => item.className.includes('slider__item_active'));
    sliderArr[indexSlider].classList.remove('slider__item_active');
    (indexSlider < (sliderArr.length - 1))? ++indexSlider : indexSlider = 0;
    sliderArr[indexSlider].classList.add('slider__item_active');  
}
function prev(){
    indexSlider = sliderArr.findIndex((item) => item.className.includes('slider__item_active'));
    sliderArr[indexSlider].classList.remove('slider__item_active');
    indexSlider == 0 ? indexSlider = sliderArr.length - 1 : --indexSlider
    sliderArr[indexSlider].classList.add('slider__item_active');   
}
arrowNext.onclick = next;
arrowPrev.onclick = prev;