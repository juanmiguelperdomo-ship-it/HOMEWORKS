import { useContext, useState } from "react";
import { AuthContext } from "../ContextAPI/Context";
import { TaskContext } from "../ContextAPI/TaskContext";
import { useNavigate } from "react-router-dom";



function Dashboard(){
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const [newTitle, setNewTitle] = useState("")
    const [editId, setEditID] = useState(null)
    const [editTitle, setEditTitle] = useState("")

    const {tasks, addTask, deleteTask, error, isPending, editTask, toggleTask } = useContext(TaskContext)
    const handleLogout = ()=>{
        logout()
        navigate("/login")
    }

    const handleAdd=()=>{
        if (!newTitle.trim()) return
        addTask(newTitle.trim())
        setNewTitle("")
    }

    const handleStartEdit = (task)=>{
        setEditID(task.id)
        setEditTitle(task.title)
    }

    const handleConfirmEdit = (id) =>{
        if (!editTitle.trim()) return;
        editTask(id, editTitle.trim());
        setEditID(null);
        setEditTitle("");    
    }

    return(
        <div>
            <h2>Bienvenido: {user?.email}</h2>
            <button onClick={handleLogout}>Cerrar Sesion</button>
            <br />

            <h3>Tareas</h3>

            <input
                type="text"
                placeholder="Nueva tarea..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={handleAdd}>Agregar</button>

            <ul>
                {tasks?.map((task) => (
                    <li key={task.id}>

                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => toggleTask(task.id, task.done)}
                        />
                        {editId === task.id ? (
                            <>
                                <input
                                value={editTitle}
                                
                                onChange={(e) => setEditTitle(e.target.value)}
                                />
                                <button onClick={() => handleConfirmEdit(task.id)}>✔</button>
                                <button onClick={() => setEditID(null)}>✖</button>
                            </>
                        ) : (
                            <>
                                <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
                                {task.title}
                                </span>
                                <button onClick={() => handleStartEdit(task)}>Editar</button>
                                <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            {tasks.length === 0 && <p>No tienes tareas aún.</p>}
        </div>
    )    

}

export default Dashboard

