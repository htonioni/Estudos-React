import { Transacao } from "./Transacao.js";
import { TiposTransacao } from "./TiposTransacao.js";

let saldo: number = 3000;

function debitar(valor: number): void{
    if (valor <= 0){
        throw new Error("O valor deve ser maior que 0")
    } else if (valor > saldo) {
        throw new Error("O valor é maior que o saldo disponível")
    }
    saldo -= valor;
}

function depositar(valor: number): void{
    if (valor <= 0){
        throw new Error("O valor a ser depositado deve ser maior que 0")
    }
    saldo += valor;
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

            console.log("Esse eh o nova transacao: " + novaTransacao);

        }
    }

export default Conta;