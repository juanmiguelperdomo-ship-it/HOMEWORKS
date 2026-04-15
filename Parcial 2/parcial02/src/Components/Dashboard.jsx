import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/context";
import Node from "../Structures/Ntree";
import TreeView from "../components/TreeView";
import "../Styles/Dashboard.css";

function Dashboard() {
    const { user, logout } = useContext(AuthContext)

    const [tree, setTree] = useState(null)
    const [currentNode, setCurrentNode] = useState(null)

    useEffect(() => {
        if (!user) return

        const root = new Node({
            id: "root",
            name: "Inicio",
            type: "folder",
            email: user.email,
        })

        setTree(root)
        setCurrentNode(root)
    }, [user])

    const createFolder = () => {
        const newNode = new Node({
            id: Date.now().toString(),
            name: "Nueva Carpeta",
            type: "folder",
            email: user.email,
        })

        currentNode.addChildren(newNode)
        setTree({ ...tree })
    }

    const createFile = () => {
        const newNode = new Node({
            id: Date.now().toString(),
            name: "Nuevo Archivo",
            type: "file",
            email: user.email,
        })

        currentNode.addChildren(newNode)
        setTree({ ...tree })
    }

    const handleLogout = async () => {
        try {
            await logout()
            setTree(null)
            setCurrentNode(null)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="dashboard">

            <div className="sidebar">
                <h3>Árbol</h3>
                {tree && (
                    <TreeView
                        node={tree}
                        onSelect={setCurrentNode}
                    />
                )}
            </div>

            <div className="content">
                <h2>{currentNode?.name}</h2>

                <div className="actions">
                    <button onClick={createFolder}>+ Carpeta</button>
                    <button onClick={createFile}>+ Archivo</button>
                </div>

                <button onClick={handleLogout} className="logout">Cerrar sesión</button>

                <div className="files">
                    {currentNode?.children?.map((child) => (
                        <div
                            key={child.id}
                            className="card"
                            onClick={() =>
                                child.type === "folder" && setCurrentNode(child)
                            }
                        >
                            {child.type === "folder" ? "📁" : "📄"}{" "}
                            {child.name}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Dashboard