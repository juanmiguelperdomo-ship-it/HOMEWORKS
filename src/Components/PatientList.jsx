import { useState, useEffect } from "react";
import LinkedList from "../Estructure/LinkedList";
import Dlist from "./DList";


function List(){
    const [linkedList] = useState(new LinkedList())
    const [patient, setPatient] = useState("")
    const [pRemove, setPremove] = useState(null)



    useEffect(()=>{
        if (linkedList.length === 0){
            linkedList.append("Juan Miguel Perdomo")
            linkedList.append("Andrea Muñoz")
            linkedList.append("John Miller Perdomo")
            linkedList.append("Natalia Perdomo")
            linkedList.append("Juan Jose Velez")
            setPatient(linkedList.getHead())
        }

    }, [])

    const nextPatient =()=>{
        if(patient){
            const next = linkedList.getNext(patient)
            if (next)  setPatient(next)
        }
    }

    const removePatient = () =>{
        if(!patient) return
        const remove = patient
        const nextNode = patient.next
        linkedList.remove(patient.value)

        setPremove(remove)
        if (nextNode) {
            setPatient(nextNode)
        } else {
            setPatient(linkedList.getHead())
        }
    }



    return(
        <div>
            <h2>Pacientes en espera</h2>
            <p>{patient?.value}</p>
            <button onClick={nextPatient}>Siguiente</button>
            <button onClick={removePatient}>Atendido</button>

            <Dlist patient={pRemove} />
        </div>
    )


}

export default List