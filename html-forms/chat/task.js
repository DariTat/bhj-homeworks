const widget = document.querySelector('.chat-widget');
const message = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active');
    
})
let timeNow = new Date().toLocaleTimeString("ru-Ru", {
    hour: "2-digit",
    minute: "2-digit",
    });

function submit(){
    if(input.value === "") {
        return false;
    }
    message.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${timeNow}</div>
        <div class="message__text">${input.value}</div>
        </div>
    `;
    let value = ['Здравстуйте', 'Добрый день! Дождитесь ответа оператора.', 'Я не хочу с Вами общаться. До свидания!', 'Данный абонент не доступен.']
    let rand = Math.floor(Math.random() * value.length);
    message.innerHTML += `
    <div class="message">
    <div class="message__time">${timeNow}</div>
    <div class="message__text">${value[rand]}</div>
    </div>
   `;   
    input.value = ''; 
}

document.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        submit();   
    }
}) 