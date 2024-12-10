const listaCompletados = document.getElementById("lista-comprados");

export function verificarListaCompletados(lista) {
    if (lista.childElementCount === 0) {
        listaCompletados.style.display = "none";
    } else {
        listaCompletados.style.display = "block";
    }
}