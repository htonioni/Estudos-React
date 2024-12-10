const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");
const listaCompletado = document.getElementById("lista-comprados");

export function verificarListaVazia(lista) {
    if (lista.children.length === 0) {
        mensagemListaVazia.style.display = "block";
        listaCompletado.style.display = "none";
    } else {
        mensagemListaVazia.style.display = "none";
        listaCompletado.style.display = "block";
    };
}
