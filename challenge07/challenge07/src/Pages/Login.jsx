import { useContext, useState } from "react";
import { AuthContext } from "../ContextAPI/Context";
import { Link, useNavigate } from "react-router-dom";


function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")

    const { login } =useContext(AuthContext)


    const navigate = useNavigate()

    const handleLogin = async ()=>{
        try{
            await login(email, password)
            navigate("/dashboard")
        }catch(error){
            alert(error.message)
        }

    }

    return(

        <div>
            <h2>Login</h2>

            <input 
                placeholder="Email"
                type="email" onChange={(e)=> setEmail(e.target.value)}
            />
            <input 
                placeholder="Contraseña"    
                type="password"onChange={(e)=> setPassWord(e.target.value)}
            />
            
            <button onClick={handleLogin}>Ingresar</button>

            <p>¿No tienes cuenta? <Link to={"/Register"}>Registrate</Link></p>


        </div>
    )
}

export default Login


