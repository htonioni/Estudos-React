
const itemConteudo = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(event) {
   event.preventDefault();

   const itemDaLista = document.createElement("li");

   // item-lista-container
   const containerItemLista = document.createElement("div");
   containerItemLista.classList.add("item-lista-container");

   const containerNomeDoItem = document.createElement("div");

   const nomeDoItem = document.createElement("p");
   nomeDoItem.innerText = itemConteudo.value;
   containerNomeDoItem.appendChild(nomeDoItem);
   containerNomeDoItem.classList.add("container-nome-compra");

   const containerBotoes = document.createElement("div");
   const botaoRemover = document.createElement("button");
   const botaoEditar = document.createElement("button");
   botaoRemover.classList.add("item-lista-button");
   botaoEditar.classList.add("item-lista-button");

   const imagemRemover = document.createElement("img");
   imagemRemover.src = "img/delete.svg";
   imagemRemover.alt = "Remover";
   const imagemEditar = document.createElement("img");
   imagemEditar.src = "img/edit.svg" 
   imagemEditar.alt = "Editar"
   

   botaoRemover.appendChild(imagemRemover);
   botaoEditar.appendChild(imagemEditar);
   containerBotoes.appendChild(botaoRemover);
   containerBotoes.appendChild(botaoEditar);


   containerItemLista.appendChild(containerNomeDoItem);
   containerItemLista.appendChild(containerBotoes);
   itemDaLista.appendChild(containerItemLista);

   listaDeCompras.appendChild(itemDaLista)
}

