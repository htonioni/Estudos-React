import { verificarListaVazia } from "./verificarListaVazia.js";
import { verificarListaCompletados } from "./verificarListaCompletados.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaCompletados = document.getElementById("lista-comprados");    

const excluirItem = (element) => {
    let confirmacao = confirm("tem certeza que deseja excluir este item?");

    if (confirmacao) {
        element.remove();
        verificarListaVazia(listaDeCompras);
        verificarListaCompletados(listaCompletados);
    }
}

export { excluirItem }; 