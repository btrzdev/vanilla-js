//Definindo as constantes
const input = document.querySelector('input');
const output = document.getElementById('first');

//Definindo o evento
input.addEventListener('input', updateValue);

//Definindo a função que passa pelo evento
function updateValue(e) {
    output.textContent = e.target.value;
}