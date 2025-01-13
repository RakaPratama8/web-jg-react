import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import Members from './pages/Members';
import InputMember from './pages/inputMember';
import Admin from './pages/Admin';


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
  },
  {
    path: '/admin',
    element: <Admin />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)