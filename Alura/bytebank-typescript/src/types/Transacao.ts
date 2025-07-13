import { TiposTransacao } from "./TiposTransacao.js"
// obj padroniza o que cada transacao PRECISA ter
export type Transacao = {
    tipoTransacao: TiposTransacao;
    valor: number;
    data: Date;
}
