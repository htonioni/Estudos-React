let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form")

elementoFormulario.addEventListener("submit", (event) =>{
   event.preventDefault();
   // if (!elementoFormulario.checkValidity()){
      //    alert("Preencha todos os campos da transação!")
      //    return
      // }
      
   const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
   const inputValor = elementoFormulario.querySelector("#valor");
   const inputData = elementoFormulario.querySelector("#data")

   let tipoTransacao = inputTipoTransacao.value;
   let valor = inputValor.value;   
   let data = inputData.value;

   if (tipoTransacao === "Depósito") {
      saldo += Number(valor)
   } else if (tipoTransacao === "Transferência" || tipoTransacao === "Pagamento de Boleto"){
      saldo -= valor
   } else {
      alert("Transação Inválida!");
      return
   }
   elementoSaldo.textContent = saldo

   const novaTransacaoObj = {
      tipoTransacao: tipoTransacao,
      valor: valor,
      data: data
   }
   console.log(novaTransacaoObj);
   elementoFormulario.reset();
})
