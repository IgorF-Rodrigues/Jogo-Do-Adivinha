const menorValor = 1;
const maiorValor = 1000;
const numeroSorteado = sorteiaNumero();

function sorteiaNumero() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSorteado);

const htmlMenor = document.querySelector('.numero-menor');
htmlMenor.innerHTML = menorValor;
const htmlMaior = document.querySelector('.numero-maior');
htmlMaior.innerHTML = maiorValor;