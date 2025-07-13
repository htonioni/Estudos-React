import { formatarMoeda, formatarData } from "../utils/formatadores.js";
import { TiposDatas } from "../types/TiposDatas.js";

let saldo: number = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoData = document.querySelector('.block-saldo time') as HTMLElement;


if (elementoData != null) {
    let data: Date = new Date();
    elementoData.textContent = formatarData(data, TiposDatas.DIA_SEMANA_DIA_MES_ANO)
}

export function getSaldo(): number {
    return saldo
}

atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo: number): void {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}