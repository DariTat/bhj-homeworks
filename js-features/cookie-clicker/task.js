const cookie = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
let count = Number(clicker.textContent);
cookie.onclick = function(){
    count += 1;
    clicker.textContent = count;
    if(count % 2 !== 0){
        cookie.width = 300;
    }else{
        cookie.width = 250; 
    }
}
