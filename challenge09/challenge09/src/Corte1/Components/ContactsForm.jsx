import { useState } from "react";

function ContactsForm({addContact}){
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!name || !phone) return

        addContact ({name, phone})

        setName("")
        setPhone("")
    }

    return(
        <form onSubmit={handleSubmit}> 
            <input type="text" value={name}  placeholder="Nombre"  name="name" onChange={n =>setName(n.target.value)} />
            <input type="text" value={phone} placeholder="Telefono"  name="phone" onChange={p =>setPhone(p.target.value)}/>
            <button type="submit">Agregar</button>
        </form>
    )

}

export default ContactsForm