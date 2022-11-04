const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let countDead = 0;
let countLost = 0;

getHole = index => document.getElementById(`hole${index}`);
for(let i = 0; i < 10; i++){
    let hole = getHole(i);
    hole.onclick = function (){
        if(hole.className.includes('hole_has-mole')){
            countDead += 1;
            dead.textContent = countDead;
        } else {
            countLost += 1;
            lost.textContent = countLost;
        }
        if(countDead == 10){
            alert("Победа");
            countDead = 0;
            countLost = 0;
            dead.textContent = countDead;
            lost.textContent = countLost;
        }
        if(countLost == 5){
            alert("Проигрыш");
            countDead = 0;
            countLost = 0;
            dead.textContent = countDead;
            lost.textContent = countLost;
        }
    }
}


