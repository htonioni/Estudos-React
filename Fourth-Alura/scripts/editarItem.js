import { obterDataAtual }  from './obterDataAtual.js';

export const editarItem = (element) => {
    let novoItem = prompt("Digite o novo nome do item:");
    if (novoItem !== null && novoItem.trim() !== ""){
        
        const itemTextoAtualizado = document.getElementById("item-titulo");
        itemTextoAtualizado.innerText = novoItem;
        
        const paragrafoHora = document.querySelector(".item-lista-texto");
        const novaHora = obterDataAtual();
        paragrafoHora.replaceWith(novaHora);
        
        const estavaCompletado = document.querySelector(".checkbox-input").checked;
        if (estavaCompletado){
            itemTextoAtualizado.style.textDecoration = "line-through";
        }
    }

}
