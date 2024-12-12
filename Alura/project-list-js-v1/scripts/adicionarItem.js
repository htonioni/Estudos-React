import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const itemConteudo = document.getElementById("input-item");
const listaCompletado = document.getElementById("lista-de-compras");

export function adicionarItem(event) {
   event.preventDefault();

   const itemDaLista = criarItemDaLista(itemConteudo.value)
   listaCompletado.appendChild(itemDaLista)
   verificarListaVazia(listaCompletado)
}
