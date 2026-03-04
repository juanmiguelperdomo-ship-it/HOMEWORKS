import { useState, useEffect } from "react";
import CDLinkedList from "../Estructure/CDLinkedList";

function Committee(){
    const [cdList] = useState(new CDLinkedList)
    const [personal, setPersonal] = useState("")

    useEffect(()=>{
        if(cdList.length === 0){
            cdList.append("Nicolas N")
            cdList.append("Alejandro")
            cdList.append("Luis Diaz")
            cdList.append("James rodriguez")
            cdList.append("David Ospina")
            cdList.append("Toby")
            setPersonal(cdList.getHead())

        }
    },[])


    const next = () => {
        const nextNode = cdList.getNext(personal)
        if (nextNode) setPersonal(nextNode)
    }

    const prev = () => {
        const prevNode = cdList.getPrev(personal)
        if (prevNode) setPersonal(prevNode)
    }

    const reset = () => {
        setPersonal(cdList.getHead())
    }

    return(
        <div>
            <h2>Comite Administrativo</h2>
            <p>{personal?.value}</p>
            <button onClick={next}>Siguiente</button>
            <button onClick={prev}>Anterior</button>
            <button onClick={reset}>Inicio</button>
        </div>
    )


}

export default Committee