import { useState } from "react"

function Add({addPeople}){
    const [name, setName]  = useState("")
    const [money, setMoney]  = useState("")
    
    const handleSubmit= (e) =>{
        e.preventDefault()
        if(!name || !money) return

        addPeople({name,money, date: new Date()})

        setName("")
        setMoney("")
    }

    return(

        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Nombre" name="name" onChange={n => setName(n.target.value)}/>
            <input type="number" value={money} placeholder="Dinero" name="money" onChange={n => setMoney(n.target.value)}/>
            <button type="submit">Agregar a la cola </button>
        </form>
    )


}


export default Add