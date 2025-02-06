import './Form.css'

export default function Form() {
   return (
      <form className='form-element'>
         <span>Sign Up</span>
         <p>Get started absolutely free</p>
         <label htmlFor="email">E-mail</label>
         <input type="email" name="email" id="emailInput" />
         <label htmlFor="password">Password</label>
         <input type="password" name="password" id="passwordInput" />
         <div className='checkbox-div'>
            <input type="checkbox" name="policy" id="policyInput" />
            <label htmlFor="policy">Creating an account means you are okay with our Terms of Service, Privacy Policy, and default Notification Settings</label>
         </div>
         <button type="submit" className='submit-button'>Sign Up</button>
      </form>
   )
}