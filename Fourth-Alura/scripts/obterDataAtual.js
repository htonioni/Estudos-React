export function obterDataAtual() {
    const itemData = document.createElement("p");
    itemData.innerHTML = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })}
    (${new Date().toLocaleDateString()}) as ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric"})}`;
    itemData.classList.add("item-lista-texto");

    return itemData;
}