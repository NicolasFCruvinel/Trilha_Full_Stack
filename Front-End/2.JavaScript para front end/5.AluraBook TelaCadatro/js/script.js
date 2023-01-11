async function buscarEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro){
            throw Error('CEP não existente!')
        }
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        logradouro.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        cidade.value = consultaCepConvertida.localidade;
        estado.value = consultaCepConvertida.uf;
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro){
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`;
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value));
