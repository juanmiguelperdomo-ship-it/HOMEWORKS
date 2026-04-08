import { useContext, useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate, Link} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../ContextAPI/Context";


function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")

    const { register } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = async ()=>{
        try{
            await register( email, password)
            navigate("/dashboard")
        }catch(error){
            alert(error.message)
        }

    }

    return(

        <div>
            <h2>Registro</h2>

            <input 
                placeholder="Email"
                type="email" onChange={(e)=> setEmail(e.target.value)}
            />
            <input 
                placeholder="Contraseña"    
                type="password"onChange={(e)=> setPassWord(e.target.value)}/>

            <button onClick={handleRegister}>
                Crear Cuenta
            </button>
            <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>


        </div>
    )
}

export default Register