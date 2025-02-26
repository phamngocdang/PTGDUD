import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/Bai2'
import Bai2 from './components/Bai2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bai2 />
  </StrictMode>,
)
