import { createContext } from "react";
import { useTask } from "../CustomHooks/useTask";

export const TaskContext = createContext()

export function TaskProvider({children}){
    const {tasks, addTask, deleteTask, editTask, toggleTask} = useTask()

    return(
        <TaskContext.Provider value={{tasks, addTask, deleteTask, editTask, toggleTask}}>
            {children}
        </TaskContext.Provider>
    )
}