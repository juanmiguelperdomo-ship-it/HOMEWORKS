import { useState, useEffect } from "react";
import ClinkedList from "../Estructure/CLinkedList";


function Rotation(){
    const[clist] = useState(new ClinkedList())
    const [doctor, setDoctor] = useState(null)

    useEffect(()=>{
        if(clist.length === 0){
            clist.append("Clara ines Quiacha")
            clist.append("Manuel")
            clist.append("Linda Valeria")
            clist.append("Laura Alvarez")
            clist.append("Nicolas Cuastumal")
            clist.append("Falcao")
            setDoctor(clist.getHead())
        }
            const interval = setInterval(() => {
                setDoctor(doc => clist.getNext(doc))
            }, 10000)
    
            return () => clearInterval(interval)

    }, [])

    
    const nextDoctor=()=>{
        if(doctor){
            const next = clist.getNext(doctor)
            if(next) setDoctor(next)
        }
    }

    const reset=()=>{
        setDoctor(clist.getHead())
    }


        

    return (
        <div>
            <h2>Medico</h2>
            <p>{doctor?.value}</p>
            <button onClick={nextDoctor}>Siguiente</button>
            <button onClick={reset}>Reiniciar</button>
        </div>
    )

}

export default Rotation



