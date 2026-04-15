import { useContext, useState } from "react";
import { useAuth } from "../CustomHooks/useAuth";
import { AuthContext } from "../Context/context";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {login} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogin = async ()=>{
        try {
            await login(email, password)
            navigate("/dashboard")
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <div>
            <h2>Login</h2>

            <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Ingresar</button>

            <p>¿No tienes cuenta? <Link to={"/Register"}>Registrate</Link></p>


        </div>

    )


}

export default Login