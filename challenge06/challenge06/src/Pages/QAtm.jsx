import { useEffect, useState } from "react";
import Queue from "../Structures/Queue";
import Add from "../Components/FormsAtm";


function Row(){
    const [queue] = useState(new Queue())
    const [people, setPeople] = useState([])

    useEffect(()=>{
        if(queue.isEmpty()){
            const data = [
                {name: "Juan Miguel", money : 200000, date: new Date()},
                {name: "Andrea Muñoz", money : 300000, date: new Date()},
                {name: "John Miller", money : 400000, date: new Date()},
                {name: "Natalia Perdomo", money : 500000, date: new Date()}
            ]

            data.forEach(d => queue.enqueue(d))
            setPeople([...queue.items])
        }
    },[])

    const addPeople = (people)=>{
        queue.enqueue(people)
        setPeople(prev => [...prev, people])
    }

    return(
        <div>
            <h1>ATM</h1>
            <Add addPeople ={addPeople}/>
            {[...people].map((p,i)=>(
                <div key={i}> <br />
                    <p>Nombre: {p.name}</p>
                    <p>Monto: ${p.money}</p>
                    <p>Fecha: {new Date(p.date).toLocaleString()}</p>
                </div>

            ))}
        </div>
    )
}


export default Row