import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Siderbar'
import BarraDePesquisa from './components/BarraDePesquisa'
import Filtro from './components/Filtro'
import Card from './components/Card'

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch('http://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes').then(resposta => resposta.json()).then(dados => setDados(dados))
  }, [])

  console.log(dados);
  

  return (
    <div className='container'>
      <Sidebar />
      <div className='container-content'>
        <BarraDePesquisa />
        <Filtro />
        <ul className='lista-cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card 
              id={item.id}
              imgUrl={item.imagem_capa}
              titulo={item.titulo}
              resumo={item.resumo}
              linhasDeCodigo={item.linhas_de_codigo}
              compartilhamentos={item.compartilhamentos}
              comentarios={item.comentarios}
              usuario={item.usuario}
              />
            </li>
          )) : null }
        </ul>
      </div>
    </div>
  )
}

export default App
