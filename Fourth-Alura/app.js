
const itemConteudo = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(event) {
   event.preventDefault();

   const itemDaLista = document.createElement("li");

   // item-lista-container
   const containerItemLista = document.createElement("div");
   containerItemLista.classList.add("item-lista-container");

   const containerNomeDoItem = document.createElement("div");

   const containerCheckbox = document.createElement("div");
   containerCheckbox.classList.add("checkbox-container");

   const checkboxInput = document.createElement("input");
   checkboxInput.type = "checkbox";
   checkboxInput.classList.add("checkbox-input");
   checkboxInput.id = "checkbox-" + contador++

   const checkboxLabel = document.createElement("label");
   checkboxLabel.setAttribute("for", checkboxInput.id);

   checkboxLabel.addEventListener("click",  (event) => {
      const checkboxInput = event.currentTarget.querySelector(".checkbox-input")      
      const checkboxCustomizado = event.currentTarget.querySelector(".checkbox-customizado")
      if (checkboxInput.checked) {
         checkboxCustomizado.classList.add("checked");
      } else {
         checkboxCustomizado.classList.remove("checked");
      }
   })
   
   const checkboxCustomizado = document.createElement("div");
   checkboxCustomizado.classList.add("checkbox-customizado");

   checkboxLabel.appendChild(checkboxInput);
   checkboxLabel.appendChild(checkboxCustomizado);
   
   containerCheckbox.appendChild(checkboxLabel);
   containerNomeDoItem.appendChild(containerCheckbox);

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

