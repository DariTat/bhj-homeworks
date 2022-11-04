const timer = document.getElementById("timer");
const countdown = function (){
    if(timer.textContent == 0){
        alert("Вы победили в конкурсе!");
        clearInterval(idInterval);
        return false;
    }
    timer.textContent -= 1;
}
const idInterval = setInterval(countdown, 1000);

