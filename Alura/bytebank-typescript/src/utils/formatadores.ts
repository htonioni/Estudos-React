import { TiposDatas } from "../types/TiposDatas.js";

export function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-br", { style:"currency", currency:"BRL" })
}

export function formatarData(data:Date, formato: TiposDatas = TiposDatas.PADRAO): string {
    if (formato === TiposDatas.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday:"long",
            day:"2-digit",
            month:"2-digit",
            year:"numeric"
        });
    } else if (formato === TiposDatas.DIA_MES) {
        return data.toLocaleDateString("pt-br", {
            day:"2-digit",
            month:"2-digit"
        });
    }
    return data.toLocaleDateString("pt-br")
}