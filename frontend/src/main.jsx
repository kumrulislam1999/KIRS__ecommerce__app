import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { AuthProvider } from './context/auth'


/* --=======================================
    Start Import BrowserRouter Here 
========================================-- */
import { BrowserRouter } from 'react-router-dom'
/* --=======================================
    End Import BrowserRouter Here 
========================================-- */


createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </AuthProvider>
  </>
)
