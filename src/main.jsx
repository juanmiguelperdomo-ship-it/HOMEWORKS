import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import List from './Components/PatientList'
import Rotation from './Components/CList'
import Committee from './Components/CDList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List />
    <Rotation />
    <Committee />
  </React.StrictMode>,
)
