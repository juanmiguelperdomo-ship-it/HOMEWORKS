import { useContext, useState } from "react";
import { AuthContext } from "../ContextAPI/Context";
import { auth } from "../firebase/config";
import { useNavigate, Link} from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")

    const navigate = useNavigate()

    const handleRegister = async ()=>{
        try{
            await createUserWithEmailAndPassword(
                auth, email, password
            )
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