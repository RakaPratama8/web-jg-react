import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'

import './index.css'
import Home from './pages/Home'
import Members from './pages/Members'
import InputMember from './pages/inputMember'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }, 
  {
    path: '/members',
    element: <Members />
  },
  {
    path: '/input',
    element: <InputMember />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)