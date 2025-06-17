const saldo = document.querySelector('.saldo-valor .valor');
const elementoFormulario = document.querySelector(".block-nova-transacao form")
const newSaldo = document.querySelector("form #valor");
let valor = 50333

saldo.innerText = valor

elementoFormulario.addEventListener("submit", (event) =>{
   event.preventDefault();
   if (!elementoFormulario.checkValidity()){
      alert("Preencha o formulário!")
   } else {
      saldo.innerText = newSaldo.value
   }
})
