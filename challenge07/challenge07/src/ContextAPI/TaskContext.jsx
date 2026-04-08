import { createContext, useContext, useEffect } from "react";
import { AuthContext } from "./Context";
import useCollection from "../CustomHooks/useCollection";

export const TaskContext = createContext()

export function TaskProvider({children}){
    const { user } = useContext(AuthContext)
    const { results: tasks, isPending, error, getAll, add, update, remove  } = useCollection("tasks")

    const refresh = () => getAll([["uid", "==", user.uid]])

    useEffect(()=>{
        if (user?.uid) refresh()
    },[user?.uid])

    const addTask = async (title) => {
        await add({ title, done: false, uid: user.uid })        
        await refresh()
    }

    const deleteTask = async (id) => {
        await remove(id)
        await refresh()
    }

    const editTask = async (id, newTitle) => {
        await update(id, { title: newTitle })
        await refresh()
    }

    const toggleTask = async (id, currentDone) => {
        await update(id, { done: !currentDone })
        await refresh()
    }


    return(
        <TaskContext.Provider value={{tasks, isPending, error, addTask, deleteTask, editTask, toggleTask}}>
            {children}
        </TaskContext.Provider>
    )
}