import './App.css'
import Sidebar from './components/Siderbar'
import BarraDePesquisa from './components/BarraDePesquisa'
import Filtro from './components/Filtro'

function App() {

  return (
    <div className='container'>
      <Sidebar />
      <div className='container-content'>
        <BarraDePesquisa />
        <Filtro />
      </div>
    </div>
  )
}

export default App
