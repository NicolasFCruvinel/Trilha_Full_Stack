import { conectaApi } from "./conectaApi.js";
const fomrulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.getElementById('imagem').value;
    const url = document.getElementById('url').value;
    const titulo = document.getElementById('titulo').value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html";
    } catch (e){
        alert(e);
    }
}

fomrulario.addEventListener("submit", evento => criarVideo(evento));