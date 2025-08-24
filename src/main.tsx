import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import Confirmar from './components/convite.tsx'
const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/confirmar",
    element : <Confirmar />
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
