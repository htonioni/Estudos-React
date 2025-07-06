const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao === TiposTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao === TiposTransacao.PAGAMENTO_BOLETO || tipoTransacao === TiposTransacao.TRANSFERENCIA) {
        saldo -= valor;
    }
    else {
        alert("Transação Inválida!");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
