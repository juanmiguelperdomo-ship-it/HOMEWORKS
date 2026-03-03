import { useState, useEffect } from 'react'

import './App.css'
import ContactsForm from './components/ContactsForm'
import ContactsList from './components/ContactsList'

function App() {
  const [contacts,setContacts] = useState([])
  const [load,setLoad] = useState(true)

  useEffect(()=>{

    const timer = setTimeout(() => {
          setContacts([
            {name: "Juan", phone: "3160508012"}, 
            {name: "Andrea", phone: "3045792069"}
          ])
          setLoad(false)
    }, 1500)

    return()=>{
      clearTimeout(timer)
      console.log("intervalo limpiado")
    }
  },[])

  const addContact = (contact) =>{
    setContacts(prev => [...prev, contact])
  }

  const deleteContact = (index) =>{
    setContacts(prev => prev.filter((_, i) => i !== index))
  }

  return(
    <div>
      <h1>AGENDA DE CONTACTOS</h1>
      {load?(
        <p>Cargando contactos...</p>
      ):(
        <>
          <ContactsForm addContact={addContact}/>
          <ContactsList contacts={contacts} deleteContact={deleteContact}/>        
        </>
      )}
    </div>
  )
}




export default App
