import './App.css'
import Sidebar from './components/Siderbar'
import BarraDePesquisa from './components/BarraDePesquisa'
import Filtro from './components/Filtro'
import Card from './components/Card'

function App() {

  return (
    <div className='container'>
      <Sidebar />
      <div className='container-content'>
        <BarraDePesquisa />
        <Filtro />
        <Card />
      </div>
    </div>
  )
}

export default App
