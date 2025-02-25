import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignUp from './pages/signUp'
import Login from './pages/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUp />
  </StrictMode>
)
