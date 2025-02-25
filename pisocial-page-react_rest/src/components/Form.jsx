import { useState } from 'react';
import { sendUserData, getUserData } from '../api/axiosConfig';
import './Form.css'
import squares from '../assets/squares.png'

export default function Form({ subtitle, children, checkboxText }) {
   // segundo parametro eh uma funcao
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [checkbox, setCheckbox] = useState(false)

   function handleSubmit(event) {
      event.preventDefault()
      const userData = {
         email: email,
         name: name,
         password: password
      }
      if (userData.email != null && userData.email.trim() != "" && checkbox != false) {
         if (children === 'Sign up') {
            sendUserData(userData);
         } else {
            getUserData(userData);
         }
         setEmail("")
         setName("")
         setPassword("")
      } else {
         alert("Please fill the information")
      }
      
   }

   return (
      <form className='form-element' onSubmit={handleSubmit}>
         <img className='square-top' src={squares} alt="squares"/>
         <div className='top'>
            <h1>{children}</h1>
            <span>{subtitle}</span>
            {children === "Sign up" ? <p>Already have an account? <a href="/login">Login here!</a></p> : <p>Does not have an account? <a href="/">Sign up here!</a></p>}
         </div>
         <div className='middle'>
            {children === "Sign up" ? <label htmlFor="email">Name</label> : ""}
            {children === "Sign up" ? <input type="text" name="name" id="nameInput" value={name} onChange={(e) => setName(e.target.value)}/> : ""}
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="passwordInput" value={password} onChange={(e) => setPassword(e.target.value)}/>
         </div>
         <div className='checkbox-div'>
            <label>
               <input type="checkbox" name="policy" onClick={(e) => setCheckbox(e.target.checked)} />
               <label htmlFor="policy">{checkboxText}</label>
            </label>
         </div>
         <button type="submit" className='submit-button'>{children}</button>
      </form>
   )
}