import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Row from './components/QAtm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Row />
  </StrictMode>
)
