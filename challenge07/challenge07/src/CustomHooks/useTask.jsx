import { useState } from "react";

export function useTask(){
    const [tasks, setTask] = useState([])

    const addTask = (title) =>{
        const newTask ={
            id : crypto.randomUUID(),
            title,
            done: false
        }
        setTask((prev)=> [...prev, newTask])
    }

    const deleteTask = (id)=>{
        setTask((prev) => prev.filter((t)=>t.id !== id))
    }

    const editTask = (id, newTitle)=>{
        setTask((prev)=> prev.map((t)=>(t.id === id ? {...t,title: newTitle} : t)))
    }

    const toggleTask = (id)=>{
        setTask((prev)=> prev.map((t)=>(t.id === id ? {...t, done: ! t.done} : t)))
    }

    return {tasks, addTask, deleteTask, editTask, toggleTask}

}
