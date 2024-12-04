
const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");

botaoSalvarItem.addEventListener("click", (event) => {
   event.preventDefault()
   console.log(item.value);
   console.log(event.target);
   console.log(event.target.value);
});

