import SocialNetwork from '../components/SocialNetwork'
import Form from '../components/Form'
import './Login.css'

function App() {
  return (
    <div className='homepage'>
      <section className='homepage-left'>
        <SocialNetwork text={'Log In'}/>
      </section>
      <section className='homepage-right'>
        <Form>Log In</Form>
      </section>
    </div>
  )
}

export default App
