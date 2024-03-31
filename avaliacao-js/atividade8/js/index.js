// Crie uma função que receba dois números como parâmetros e retorne a soma deles.
//      Utilize essa função para realizar somas diferentes.

function calcularSoma() {
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
        
        let soma = n1 + n2;
        document.getElementById("resultado").textContent = "A soma é: " + soma;
    }
