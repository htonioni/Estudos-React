import { useState } from "react";
import "./styles.css";

export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  console.log(termoPesquisa);
  
  return (
    <input
      type="search"
      placeholder="Digite o que voce procura"
      className="barra-pesquisa"
      onChange={(event) => setTermoPesquisa(event.target.value)}
    />
  );
}
