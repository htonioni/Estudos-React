import SocialNetwork from './components/SocialNetwork'
import Form from './components/Form'
import './App.css'

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
