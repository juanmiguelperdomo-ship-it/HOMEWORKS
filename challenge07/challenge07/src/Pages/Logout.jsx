import { useContext } from "react";
import { AuthContext } from "../ContextAPI/Context";
import { Link, Outlet, useNavigate } from "react-router-dom";



function Dashboard(){
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = ()=>{
        logout()
        navigate("/login")
    }

    return(
        <div>
            <br />
            <h2>MENU</h2>
            <p>Bienvenido: {user?.name}</p>
            <Link to="Row">ATM</Link> |
            <Link to="Books"> Libreria</Link>
            <br />
            <br />
            <button onClick={handleLogout}>
                Cerrar Sesion
            </button>

            <Outlet />
        </div>
    )    

}

export default Dashboard

