import './App.css'


function BotaoPersonalizado(){
  return <button>Click me!</button>
}

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <BotaoPersonalizado />
      <BotaoPersonalizado />
    </div>
  ) 
}

export default App
