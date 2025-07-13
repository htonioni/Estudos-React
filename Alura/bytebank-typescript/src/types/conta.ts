import { Transacao } from "./Transacao.js";
import { TiposTransacao } from "./TiposTransacao.js";

// let saldo: number = 3000;
let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if (key === "data") {
        return new Date(value);
    }

    return value;
}) || [];

function debitar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor deve ser maior que 0")
    } else if (valor > saldo) {
        throw new Error("O valor é maior que o saldo disponível")
    }
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString())
}

function depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que 0")
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString())
}

const Conta = {
    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TiposTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao == TiposTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TiposTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        } else {
            throw new Error("Transação Inválida!");
        }


        transacoes.push(novaTransacao);
        console.log("Esse eh : " + transacoes);
        localStorage.setItem("transacoes", JSON.stringify(transacoes));

    }
}

export default Conta;