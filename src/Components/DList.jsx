import { useEffect, useState } from "react";
import DlinkedList from "../Estructure/DlinkedList";

function Dlist({patient}){
    const [history] = useState(new DlinkedList())
    const [Apatient, setApatient] = useState("")

    useEffect(()=>{
        if(history.length === 0){
            history.append("Juan Camilo")
            history.append("Jhon Alejandro")
            history.append("Messi ")
            history.append("Cristiano Ronaldo")
            history.append("Maradona")
            history.append("Neymar")
            setApatient(history.getHead())

        }
    },[])

    useEffect(()=>{
        if(patient) history.append(patient.value)
    },[patient])

    const nextApatient=()=>{
        if(Apatient){
            const next = history.getNext(Apatient)
            if(next) setApatient(next)
        }
    }

    const prevApatient=()=>{
        if(Apatient){
            const prev = history.getPrev(Apatient)
            if(prev) setApatient(prev)
        }
    }


    return(
        <div>
            <h2>Historial de pacientes</h2>
            <p>{Apatient?.value}</p>
            <button onClick={prevApatient}>Anterior</button>
            <button onClick={nextApatient}>Siguiente</button>
        </div>
    )

}

    export default Dlist