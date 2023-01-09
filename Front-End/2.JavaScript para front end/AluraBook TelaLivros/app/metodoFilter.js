const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn. addEventListener('click', filtarLivros));

function filtarLivros () {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade():filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDosLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(precoTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = 
    `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotal}</span></p>
    </div>
    `
}