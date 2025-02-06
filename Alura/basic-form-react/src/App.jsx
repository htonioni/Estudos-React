import SocialNetwork from './components/SocialNetwork'
import './App.css'
import Form from './components/Form'

function App() {


  return (
    <div className='homepage'>
      <section className='homepage-left'>
        <SocialNetwork />
      </section>
      <section className='homepage-right'>
        <Form />
      </section>
    </div>
  )
}

export default App
