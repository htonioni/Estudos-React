import { formatarMoeda, formatarData } from "../utils/formatadores.js";
import { TiposDatas } from "../types/TiposDatas.js";
import Conta from "../types/Conta.js";

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoData = document.querySelector('.block-saldo time') as HTMLElement;


if (elementoData != null) {
    elementoData.textContent = formatarData(Conta.getDataAcesso(), TiposDatas.DIA_SEMANA_DIA_MES_ANO)
};

renderizarSaldo();
function renderizarSaldo(): void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar() {
        renderizarSaldo()
    }
}

export default SaldoComponent;