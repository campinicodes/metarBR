let metarSolicitadoValor;
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const metarSolicitado = document.getElementById('metarSolicitado');
    metarSolicitadoValor = metarSolicitado.value;

    const url1 = `https://api-redemet.decea.mil.br/aerodromos/info?api_key=CHAVEAPI&localidade=${metarSolicitadoValor}`;
    fetch(url1)
        .then(response => response.json())
        .then(data => {
            let nomeAerodromoJSON = data.data.nome;
            let dateJSON = data.data.data;
            let tempJSON = data.data.temperatura;
            let umidadeJSON = data.data.ur;
            let visibilityJSON = data.data.visibilidade;
            let ceilingJSON = data.data.teto;
            let skyJSON = data.data.ceu;
            let summaryJSON = data.data.condicoes_tempo;
            let windJSON = data.data.vento;
            setTimeout(() => {
                let nomeAerodromo = document.getElementById('nomeAerodromo');
                let date = document.getElementById('date');
                let temp = document.getElementById('temp');
                let umidade = document.getElementById('umidade');
                let visibility = document.getElementById('visibility');
                let ceiling = document.getElementById('ceiling');
                let sky = document.getElementById('sky');
                let summary = document.getElementById('summary');
                let wind = document.getElementById('wind');
                nomeAerodromo.textContent = nomeAerodromoJSON;
                date.textContent = dateJSON;
                temp.textContent = tempJSON;
                umidade.textContent = umidadeJSON;
                visibility.textContent = visibilityJSON;
                ceiling.textContent = ceilingJSON;
                sky.textContent = skyJSON;
                summary.textContent = summaryJSON;
                wind.textContent = windJSON;
            }, 500);
        })
        .catch(error => console.log(error));

    const url2 = `https://api-redemet.decea.mil.br/aerodromos/info?api_key=CHAVEAPI&localidade=${metarSolicitadoValor}`;
    fetch(url2)
        .then(response => response.json())
        .then(data => {
            const metarMensagem = data.data.metar;
            setTimeout(() => {
                let metarPuro = document.getElementById("metarPuro");
                metarPuro.textContent = metarMensagem;
            }, 500);
        })
        .catch(error => console.log(error));
});


function mostrar() {

    let decodificacao = document.getElementById('decodificacao');
    let decodificar = document.getElementById('decodificar');
    
    if (decodificacao.style.visibility === "visible") {
      decodificacao.style.visibility = "hidden";
      decodificar.innerText = "DECODIFICAR";
    } else {
      decodificacao.style.visibility = "visible";
      decodificar.innerText = "ESCONDER";

}

}




 

