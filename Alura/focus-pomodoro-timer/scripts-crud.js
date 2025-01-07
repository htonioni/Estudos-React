const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
const ulTarefas = document.querySelector(".app__section-task-list")
const paragrafoDescricaoTarefa = document.querySelector(".app__section-active-task-description");

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
let tarefaSelecionada = null
let liTarefaSelecionada = null

function atualizarTarefas() {
   localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function criarElementoTarefa(tarefaCadastrada) {
   const li = document.createElement("li");
   li.classList.add("app__section-task-list-item");

   const svg = document.createElement("svg");
   svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>`
   const paragrafo = document.createElement("p");
   paragrafo.textContent = tarefaCadastrada.descricao;
   paragrafo.classList.add("app__section-task-list-item-description");

   const botao = document.createElement("button");
   botao.classList.add("app_button-edit");
   botao.onclick = () => {
      const novaDescricao = prompt("Qual é o novo nome da tarefa?").trim()
      if (novaDescricao != null) {
         //debugger
         paragrafo.textContent = novaDescricao
         tarefaCadastrada.descricao = novaDescricao
         atualizarTarefas();
      }
   }
   const imagemBotao = document.createElement("img");
   imagemBotao.src = "./imagens/crud/edit.png";
   botao.appendChild(imagemBotao);
   

   li.appendChild(svg);
   li.appendChild(paragrafo);
   li.appendChild(botao);

   li.onclick = () => {
      document.querySelectorAll(".app__section-task-list-item-active").forEach(elemento => {
         elemento.classList.remove('app__section-task-list-item-active')
      })
      if (tarefaSelecionada == tarefaCadastrada) {
         paragrafoDescricaoTarefa.textContent = ''
         tarefaSelecionada = null
         liTarefaSelecionada = null
         return
      }
      tarefaSelecionada = tarefaCadastrada
      liTarefaSelecionada = li
      paragrafoDescricaoTarefa.textContent = tarefaCadastrada.descricao
      li.classList.add("app__section-task-list-item-active")
   }
   return li
}

btnAdicionarTarefa.addEventListener("click", () => {
   formAdicionarTarefa.classList.toggle("hidden")
})

formAdicionarTarefa.addEventListener("submit", (event) => {
   event.preventDefault();
   const tarefaCadastrada = {
      descricao: textArea.value
   }
   tarefas.push(tarefaCadastrada);
   const elementoTarefa = criarElementoTarefa(tarefaCadastrada)
   ulTarefas.append(elementoTarefa);
   atualizarTarefas();
   textArea.value = ''
   formAdicionarTarefa.classList.add('hidden')
})

tarefas.forEach(tarefaCadastrada => {
   const elementoTarefa = criarElementoTarefa(tarefaCadastrada)
   ulTarefas.append(elementoTarefa);
});

document.addEventListener("FocoFinalizado", () => {
   if (tarefaSelecionada && liTarefaSelecionada) {
      // debugger;
      liTarefaSelecionada.classList.remove("app__section-task-list-item-active");
      liTarefaSelecionada.classList.add("app__section-task-list-item-complete");
      liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disable');
   }
})