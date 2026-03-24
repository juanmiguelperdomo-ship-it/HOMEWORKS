import { Children, useContext } from "react"
import { AuthContext } from "../ContextAPI/Context"
import { Navigate, Outlet } from "react-router-dom"

function Private({children}){
    const { user } = useContext(AuthContext)
    return user ? <Outlet /> : <Navigate to="/Login"/>
}

export default Private