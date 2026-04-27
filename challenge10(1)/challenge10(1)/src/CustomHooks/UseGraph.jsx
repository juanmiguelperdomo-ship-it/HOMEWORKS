import { useState } from "react"
import Graph from "../structure/Graph"

export function useGraph(){
    const [graph] = useState(new Graph())
    const [person, setPerson] = useState([])
    const [counter, setCounter] = useState(0) 
    const [city, setCity] = useState([])
    const [foundCity, setFoundCity] = useState("")
    
    const addCity = (name) =>{
        if(city.includes(name)) return
        graph.addNode(name)
        setCity([...city, name ])
    }

    const addPerson = (name, age, selectedCity)=>{
        const id = `${name}-${counter}`
        const newPerson = { id, name, age }
        graph.addNode(id)
        graph.addEdge(id, selectedCity)
        setPerson([...person, newPerson])
        setCounter(counter + 1)
    }
    return {addPerson, person, addCity, city, graph, foundCity, setFoundCity}
}

