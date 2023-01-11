function verificarSeOChutePossuiValorValido(chute){
    const numero = +chute;

    if (chuteInvalido(numero)){
        if (chute === "game over"){
            document.body.innerHTML = `
                <h2>Game Over</h2>
                <h3>O número secreto era <span>${numeroSecreto}</span></h3>

                <button id="jogar-novamente" class="btn-jogar">Jogar Noavamente</button>
            `
        }else{
            elementoChute.innerHTML += '<div>Valor inválido: Fale um número</div>'
        }
        return
    }

    if (numeroMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era <span>${numeroSecreto}</span></h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Noavamente</button>
        `
    }else if (numero>numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor  <i class="fa-solid fa-arrow-turn-down"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
            <div>O número secreto é maior  <i class="fa-solid fa-arrow-turn-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero){
    return numero>maiorValor || numero<menorValor;
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})