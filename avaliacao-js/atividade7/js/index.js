// Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta.
//     Utilize essa função para converter diferentes strings.

function converterTexto(str) {
  return str.toUpperCase();
}

function exibir() {
  let valorInput = document.getElementById("inputTexto").value;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = converterTexto(valorInput)
}