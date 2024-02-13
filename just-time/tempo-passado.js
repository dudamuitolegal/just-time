function calcularDiferencaDeTempo(dataEspecifica) {
    const agora = new Date();
    const diferenca = agora - dataEspecifica;

    let segundos = Math.floor(diferenca / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;

    return {
        dias,
        horas,
        minutos,
        segundos
    };


}

const dataEspecifica = new Date(2024, 0, 31, 20, 36);

function atualizarTempo() {
    const tempoPassado = calcularDiferencaDeTempo(dataEspecifica);
    document.getElementById('dias').textContent = `${tempoPassado.dias}`;
    document.getElementById('horas').textContent = `${tempoPassado.horas}`;
    document.getElementById('minutos').textContent = `${tempoPassado.minutos}`;
    document.getElementById('segundos').textContent = `${tempoPassado.segundos}`;
}


setInterval(atualizarTempo, 1000);


atualizarTempo();

function newGradient(horas) {
    const body = document.querySelector('body')
    const gradientDia = 'linear-gradient(rgb(239 203 146), rgb(255, 110, 50) 70%)'
    const gradientTarde = 'linear-gradient(rgb(255, 110, 50), rgb(10 13 27) 70%)'
    const gradientAnoitecer = 'linear-gradient(to bottom, #030420, #000000 70%)'
    if (horas >= 5 && horas < 15 ) {
        body.style.background = gradientDia
    } else if (horas >= 15 && horas <= 19) {
        body.style.background = gradientTarde
    } else {
        body.style.background = gradientAnoitecer
    }
}
const agora = new Date()
const horas = agora.getHours()
newGradient(horas)
