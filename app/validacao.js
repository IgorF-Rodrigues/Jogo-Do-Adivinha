function verificaSeOChutePossuiValorValido(chute) {
    let numero = +chute ;

    if(ChuteForInvalido(numero)) {
        htmlChute.innerHTML += '<div>valor inválido</div>';
        return;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        htmlChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if(numero === numeroSorteado) {
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSorteado}</h3>
        <button id='jogarNovamente' class='btn-jogar'>Jogar Novamente</button>`;
    } else if (numero > numeroSorteado) {
        htmlChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>';
    } else {
        htmlChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>';
    }
}

function ChuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogarNovamente') {
        window.location.reload();
    }
})

function gameOver(chute) {
    if( chute == 'game over'){
        document.body.innerHTML = `
        <h1>Você desistiu!</h1>
        <h3>Fim de jogo.</h3>
        <button id='jogarNovamente' class='btn-jogar'>Jogar Novamente</button>`;
        document.body.style = 'background: #041C32';
    }
}
