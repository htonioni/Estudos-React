import { useState } from "react";

function App() {
  // State (estado)
  // Variavel React que forca o componente a ser renderizado novamente  
  const [message, setMessage] = useState('Hello, world!')
  
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => {
        setMessage("Ola, foi clicado!")
      }}
      >Mudar mensagem</button>
      <ul>
        <li>test</li>
        <li>test2</li>
      </ul>
    </div>
  )
};

export default App;