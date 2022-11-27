const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
const links = Array.from(document.querySelectorAll('a'));

let tooltip = document.createElement('div');
tooltip.className = 'tooltip';

tooltips.forEach((item) => item.addEventListener('click', ()=>{
    const {height, top, left} = item.getBoundingClientRect();
    if(tooltip.innerText == item.title){
        tooltip.classList.toggle('tooltip_active');
    } else {
        tooltip.innerText = item.title;
        tooltip.classList.add('tooltip_active');
        tooltip.style.top = (top + height) + "px";
        tooltip.style.left = left + "px";
        item.insertAdjacentElement("afterend", tooltip);
    }
}))

links.forEach((link) => link.onclick = function(){
    if(link.title != ''){
        return false;
    }
    
});