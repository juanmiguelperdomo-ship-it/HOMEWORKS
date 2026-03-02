import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StudentList from './components/StudentList1'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentList />
  </StrictMode>,
)
