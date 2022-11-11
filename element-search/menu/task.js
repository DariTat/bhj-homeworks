const menuLinks = document.querySelectorAll('.menu__link');
let linksArr = Array.from(menuLinks);

linksArr.forEach((item) => item.onclick = function(){
    let parent = item.parentElement;
    const nestedMenu = parent.querySelector('.menu');
    if(nestedMenu){
        nestedMenu.classList.toggle('menu_active');
        return false;
   }
    
});