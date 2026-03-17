import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Row from './components/QAtm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Row />
  </StrictMode>
)
