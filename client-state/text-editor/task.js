const editor = document.getElementById('editor');
const card = document.querySelector('.card');

editor.addEventListener('input', () => {
    localStorage.setItem('editor', editor.value);
})

editor.value = localStorage.getItem('editor');

card.insertAdjacentHTML('beforeend', `
    <button class="button">Очистить содержимое</button>
`);

let button = document.querySelector('button');
button.addEventListener('click', ()=>{
    editor.value = "";
    localStorage.clear();
})