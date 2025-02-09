import './Form.css'
import squares from '../assets/squares.png'
import { useState } from 'react';

export default function Form() {
   // segundo parametro eh uma funcao
   const [user, setUser] = useState("");

   function handleValue(event) {
      setUser(event.target.value)
   }

   function handleSubmit(event) {
      event.preventDefault()
      const welcomeUsuario = document.getElementById("welcomeUsuario");
      welcomeUsuario.style.display = "block";
   }

   return (
      <form className='form-element' onSubmit={handleSubmit}>
         <img className='square-top' src={squares} alt="squares"/>
         <div className='top'>
            <h1>Sign Up</h1>
            <span>Get started absolutely free</span>
         </div>
         <div className='middle'>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="emailInput" onChange={handleValue}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="passwordInput" />
         </div>
         <div className='checkbox-div'>
            <label>
               <input type="checkbox" name="policy" />Creating an account means you are okay with our Terms of Service, Privacy Policy, and default Notification Settings
            </label>
         </div>
         <button type="submit" className='submit-button'>Sign Up</button>
         <span id='welcomeUsuario'>Bem vindo, {user}!</span>
      </form>
   )
}