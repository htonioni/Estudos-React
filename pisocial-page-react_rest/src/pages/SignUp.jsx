import SocialNetwork from '../components/SocialNetwork'
import Form from '../components/Form'
import './SignUp.css'

function App() {
  return (
    <div className='homepage'>
      <section className='homepage-left'>
        <SocialNetwork text={"Sign Up"}/>
      </section>
      <section className='homepage-right'>
        <Form subtitle={"Get started absolutely free"}>Sign up</Form>
      </section>
    </div>
  )
}

export default App
