const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
const links = Array.from(document.querySelectorAll('a'));

tooltips.forEach((item) => item.addEventListener('click', ()=>{
    const {height, top, left} = item.getBoundingClientRect();
    item.outerHTML += `<div class="tooltip">${item.title}</div>`;
    let tooltip =  document.querySelector('.tooltip');
    tooltip.classList.toggle('tooltip_active');
    tooltip.style.top = (top + height) + "px";
    tooltip.style.left = left + "px";
}))

links.forEach((link) => link.onclick = function(){
    return false;
});