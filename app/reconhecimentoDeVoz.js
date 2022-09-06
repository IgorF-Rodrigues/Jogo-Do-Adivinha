const htmlChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', (e) => {
    let chute = e.results[0][0].transcript;
    escreveTela(chute);
    verificaSeOChutePossuiValorValido(chute);
    gameOver(chute);
})

function escreveTela(chute) {
    htmlChute.innerHTML = `
    <div>Você disse:</div>
    <span class='box'>${chute}</span>`;
}

recognition.addEventListener('end', () => recognition.start());