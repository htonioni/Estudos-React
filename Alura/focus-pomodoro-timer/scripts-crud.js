const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");

tarefas = []

btnAdicionarTarefa.addEventListener("click", () => {
   formAdicionarTarefa.classList.toggle("hidden")
})

formAdicionarTarefa.addEventListener("submit", (event) => {
   event.preventDefault();
   const tarefaCadastrada = {
      descricao: textArea.value
   }
   tarefas.push(tarefaCadastrada);
   localStorage.setItem("tarefas", JSON.stringify(tarefas));
})