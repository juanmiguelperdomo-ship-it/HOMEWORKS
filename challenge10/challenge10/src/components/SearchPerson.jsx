import { useContext } from "react"
import { GraphContext } from "../context/createContext"


function SearchPerson(){
    const {city, graph, person, foundCity, setFoundCity} = useContext(GraphContext)

    const peopleCity = foundCity ? graph.adjlist[foundCity].map(id => person.find(p => p.id === id)).filter(Boolean) : []

    return (
        <div>
            <select value={foundCity} onChange={(e) => setFoundCity(e.target.value)}>
                <option value="">Selecciona ciudad</option>
                {city.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <ul>
                {peopleCity.map(p => (
                    <li key={p.name}>{p.name} - {p.age} años</li> 
                ))}
            </ul>
        </div>
    )
}

export default SearchPerson