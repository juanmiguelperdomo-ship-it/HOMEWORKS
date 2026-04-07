import { Children, useContext } from "react"
import { AuthContext } from "../ContextAPI/Context"
import { Navigate, Outlet } from "react-router-dom"

function Private({children}){
    const { user, loading } = useContext(AuthContext)
    if (loading) return <p>Cargando...</p>
    return user ? <Outlet /> : <Navigate to="/Login"/>
}

export default Private