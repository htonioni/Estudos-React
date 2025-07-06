let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoData = document.querySelector('.block-saldo time');
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
if (elementoData != null) {
    let data = new Date();
    elementoData.textContent = formatarData(data, TiposDatas.DIA_SEMANA_DIA_MES_ANO);
}
