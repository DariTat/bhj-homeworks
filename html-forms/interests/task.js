const interest = document.querySelectorAll('.interest__check');
let interests = Array.from(interest);


interests.forEach((item) => item.addEventListener('change', ()=> {
    if(item.checked == true){
        interests.forEach((i)=> {
            if(i.closest('.interests').parentElement == item.closest('.interest')){
                i.checked = true;
            }
        })
    }else{
        interests.forEach((i)=> {
        if(i.closest('.interests').parentElement == item.closest('.interest')){
            i.checked = false;
        }
       })
   }
}))