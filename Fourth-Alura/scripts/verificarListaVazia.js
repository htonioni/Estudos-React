const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");
const listaCompletados = document.getElementById("lista-comprados");

export function verificarListaVazia(lista) {
    if (lista.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";
        listaCompletados.style.display = 'none';
        
    } else {
        mensagemListaVazia.style.display = "none";
    };
}
