// 4) Descreva e crie exemplos com suas formas diferente eventos no javascript, segue alguns exemplo:

//   . onmouseover

function bigImg(x) {
  x.style.height = "70px";
  x.style.width = "70px";
}

function normalImg(x) {
  x.style.height = "40px";
  x.style.width = "40px";
}

//   . onfocus;

function myFunction(x) {
  x.style.background = "pink";
}

//   . onchange;

function myFunction() {
  var x = document.getElementById("selecionar").value;
  document.getElementById("demo").innerHTML = "Voce selecionou: " + x;
}