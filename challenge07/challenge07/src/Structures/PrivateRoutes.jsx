import { AuthContext } from "../ContextAPI/Context"
import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"

function Private({children}){
    const { user, loading } = useContext(AuthContext)
    if (loading) return <p>Cargando...</p>
    return user ? <Outlet /> : <Navigate to="/Login"/>
}

export default Private