// 6)  Desenvolva um script qua ao clicar no botão conta o numero de vezes clicado,
// em que seja separado o HTML e o JavaScript.

let botao = document.getElementById('botao');
let contador = document.getElementById('contador');
let count = 0;

botao.addEventListener('click', function() {
    count++;
    contador.textContent = count + (count === 1 ? ' clique' : ' cliques');
});