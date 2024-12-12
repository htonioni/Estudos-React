import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { verificarListaCompletados } from "./verificarListaCompletados.js";

const itemConteudo = document.getElementById("input-item");
const listaProjetos = document.getElementById("lista-de-compras");
const listaCompletados = document.getElementById("lista-comprados");

export function adicionarItem(event) {
   event.preventDefault();

   if (itemConteudo.value.trim() === "") {
      alert("Você não pode adicionar um item vazio");
      return;
   }

   const itemDaLista = criarItemDaLista(itemConteudo.value);
   listaProjetos.appendChild(itemDaLista);
   verificarListaVazia(listaProjetos);
   verificarListaCompletados(listaCompletados);
   itemConteudo.value = "";

}
