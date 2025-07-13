import { Transacao } from "./Transacao.js";
import { TiposTransacao } from "./TiposTransacao.js";

let saldo: number = 3000;

const Conta = {
    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TiposTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        } else if (novaTransacao.tipoTransacao == TiposTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TiposTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor
        } else {
            alert("Transação Inválida!");
            return
        }

        console.log("Esse eh o nova transacao: " + novaTransacao);

    }
}

export default Conta;