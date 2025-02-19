import { useState } from 'react';
import { sendUserData } from '../api/axiosConfig';
import './Form.css'
import squares from '../assets/squares.png'

export default function Form() {
   // segundo parametro eh uma funcao
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");

   function handleSubmit(event) {
      event.preventDefault()
      const userData = {
         email: email,
         name: name,
         password: password
      }
      sendUserData(userData);
      setEmail("")
      setName("")
      setPassword("")
   }

   return (
      <form className='form-element' onSubmit={handleSubmit}>
         <img className='square-top' src={squares} alt="squares"/>
         <div className='top'>
            <h1>Sign Up</h1>
            <span>Get started absolutely free</span>
         </div>
         <div className='middle'>
            <label htmlFor="email">Name</label>
            <input type="text" name="name" id="nameInput" value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="passwordInput" value={password} onChange={(e) => setPassword(e.target.value)}/>
         </div>
         <div className='checkbox-div'>
            <label>
               <input type="checkbox" name="policy" />Creating an account means you are okay with our Terms of Service, Privacy Policy, and default Notification Settings
            </label>
         </div>
         <button type="submit" className='submit-button'>Sign Up</button>
      </form>
   )
}