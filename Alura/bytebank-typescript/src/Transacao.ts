// obj padroniza o que cada transacao PRECISA ter
type Transacao = {
    tipoTransacao: TiposTransacao;
    valor: number;
    data: Date;
}