let arrowPrev = document.querySelector('.slider__arrow_prev');
let arrowNext = document.querySelector('.slider__arrow_next');

let slider = document.querySelectorAll('.slider__item');
let sliderArr = Array.from(slider);
let indexSlider = 0;
function next(){ 
    if(indexSlider < (sliderArr.length - 1)){
        sliderArr[indexSlider].classList.remove('slider__item_active');
        indexSlider += 1;
        sliderArr[indexSlider].classList.add('slider__item_active');
        
    }else if(indexSlider == (sliderArr.length - 1)) {
        sliderArr[indexSlider].classList.remove('slider__item_active');
        indexSlider = 0;
        sliderArr[indexSlider].classList.add('slider__item_active');    
    } 
}
function prev(){
    if(indexSlider == 0){
        sliderArr[indexSlider].classList.remove('slider__item_active');
        indexSlider = sliderArr.length - 1;
        sliderArr[indexSlider].classList.add('slider__item_active');   
    } else {
        sliderArr[indexSlider].classList.remove('slider__item_active');
        indexSlider -= 1;
        sliderArr[indexSlider].classList.add('slider__item_active');
    }
}
arrowNext.onclick = next;
arrowPrev.onclick = prev;