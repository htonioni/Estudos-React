import { TiposTransacao } from "../types/TiposTransacao.js"
import { Transacao } from "../types/Transacao.js"
import SaldoComponent from "./saldo-component.js"
import Conta from "../types/Conta.js"
import ExtratoComponent from "./extrato-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", (event) => {
    try {
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
        let data: Date = new Date(inputData.value + " 00:00:00");

        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        }

        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar()
        elementoFormulario.reset();
    } catch (error) {
        alert(error.message);
    }   

})
