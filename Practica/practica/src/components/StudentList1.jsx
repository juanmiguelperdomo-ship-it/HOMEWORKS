import { useEffect, useState } from "react";
import LinkedList from "../structures/LinkedList";
import StudentView from "./StudentView";

function StudentList(){
    const [linkedList] = useState(new LinkedList())
    const [student,setStudent] = useState(null)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [code, setCode] = useState("")

    const addStudent = () => {
        if (!name || !age || !code) return

        linkedList.append({
            name,
            age,
            code
        })

        setStudent(linkedList.getHead())
        setName("")
        setAge("")
        setCode("")
    }

    const nextStudent = ()=>{
        if(student){
            const next = linkedList.getNext(student)
            if(next) setStudent(next)
        }
    }

    const removeStudent = () =>{
        if(!student) return
        const nextNode = student.next
        linkedList.remove(student.value)

        if(nextNode){
            setStudent(nextNode)
        }else{
            setStudent(linkedList.getHead())
        }
        console.log("Se ha eliminado a un estudiante")
    }

    useEffect(()=>{
        if(linkedList.length > 0)
            console.log("Se ha añadido a un estudiante")
    },[student])

    return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <input type="text" value={name} placeholder="Nombre" onChange={(n) =>setName(n.target.value)} />
      <input type="text" value={age} placeholder="Edad" onChange={(a) =>setAge(a.target.value)} />
      <input type="text" value={code} placeholder="Codigo" onChange={(c) =>setCode(c.target.value)} />
       <br /> <br /> 
      <button onClick={addStudent}>Agregar</button>
      <button onClick={removeStudent}>Eliminar</button>
      <button onClick={nextStudent}>Siguiente</button>

      <StudentView student ={student?.value} />
    </div>
  )
}



export default StudentList