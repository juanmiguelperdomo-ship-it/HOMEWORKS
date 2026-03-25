import { useContext, useState } from "react";
import { AuthContext } from "../ContextAPI/Context";
import { useNavigate } from "react-router-dom";


function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const navigate = useNavigate()

    const {login} = useContext(AuthContext)

    const handleLogin = ()=>{
        const succes =login(email, password)
        if(succes){
            navigate("/dashboard")
        } else{
            alert("El email o la contraseña son incorrectos")
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
                type="password"onChange={(e)=> setPassWord(e.target.value)}/>

            <button onClick={handleLogin}>
                Ingresar
            </button>


        </div>
    )
}

export default Login





