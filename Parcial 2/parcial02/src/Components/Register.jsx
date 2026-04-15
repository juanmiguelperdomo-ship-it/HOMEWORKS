import { useContext, useState } from "react";
import { AuthContext } from "../Context/context";
import { useNavigate, Link } from "react-router-dom";


function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { register } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = async ()=>{
        try {
            await register(email, password)
            navigate("/dashboard")
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <div>
            <h2>Regitro</h2>

            <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)} />

            <button onClick={handleRegister}>Crear Cuenta</button>

            <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
    )
}

export default Register