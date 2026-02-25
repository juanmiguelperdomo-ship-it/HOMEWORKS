import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelloWorld from './HelloWorld.tsx'
import PrintMessage from './PrintMessage.tsx'
import Contador from './Contador.tsx'
import Arreglos from './Arreglos.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        < HelloWorld  />
        < PrintMessage message="Como te va?" />
        < PrintMessage message='El resultado es '/>
        <Contador suma = {15} />
        <Arreglos />

    </StrictMode>
)
