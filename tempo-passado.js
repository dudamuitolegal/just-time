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


const seconds_to_percentage = () => {
    const current_time = new Date();
    const start_day_time = new Date(current_time.getFullYear(), current_time.getMonth(), current_time.getDate());
    return ((Math.floor((current_time - start_day_time) / 1000) / 86400) * 100) + '%';
}

const delta = 1000
const bg_el = document.body;
setInterval(function(){
      bg_el.style.backgroundPositionY = seconds_to_percentage(); 
}, delta)