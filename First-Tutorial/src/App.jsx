import './App.css'
import Botao from './components/Botao'
import Header from './components/Header'


function App() {
  let variavel; 

  return (
    <div id='bode'>
      <Header></Header>
      <h1>Hello, world!</h1>
      <p>{variavel}</p>
      <Botao></Botao>
    </div>
  )  
}

export default App
