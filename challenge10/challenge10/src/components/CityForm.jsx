import { useContext, useState } from "react"
import { GraphContext } from "../context/createContext"

function CityForm(){
    const [name, setName] = useState("")
    const { addCity } = useContext(GraphContext)

    const handleAdd = () =>{
        if(!name.trim()) return
        const formatted = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()
        addCity(formatted)
        setName("")
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleAdd() }}>
            <input type="text" value={name} placeholder="Ciudad" onChange={(e) => setName(e.target.value)}/>
            <button type="submit">Agregar Ciudad</button>
        </form>
    )
}



export default CityForm
