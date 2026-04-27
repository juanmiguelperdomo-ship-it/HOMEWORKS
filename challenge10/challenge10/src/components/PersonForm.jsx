import { useContext, useState } from "react"
import { GraphContext } from "../context/createContext"

function PersonForm(){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    
    const { addPerson, city } = useContext(GraphContext)


    const handleAdd = () =>{
        if(!name.trim() || !age.trim() || !selectedCity.trim()) return
        addPerson(name,Number(age), selectedCity)
        setName("")
        setAge("")
        setSelectedCity("")
    }

    return (
        <form className="form-row" onSubmit={(e) => { e.preventDefault(); handleAdd() }}>
            <input type="text" value={name} placeholder="Nombre" onChange={(e) => setName(e.target.value)}/>
            <input type="number" value={age} placeholder="Edad" onChange={(e) => setAge(e.target.value)}/>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="">Selecciona ciudad</option>   
                {city.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <button type="submit">Agregar Persona</button>
        </form>
    )


}

export default PersonForm