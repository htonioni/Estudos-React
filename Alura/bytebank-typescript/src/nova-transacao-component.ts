const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Preencha todos os campos da transação!")
        return
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TiposTransacao = inputTipoTransacao.value as TiposTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao === TiposTransacao.DEPOSITO) {
        saldo += valor;
    } else if (tipoTransacao === TiposTransacao.PAGAMENTO_BOLETO || tipoTransacao === TiposTransacao.TRANSFERENCIA) {
        saldo -= valor
    } else {
        alert("Transação Inválida!");
        return
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    }

    console.log(novaTransacao);
    elementoFormulario.reset();

})