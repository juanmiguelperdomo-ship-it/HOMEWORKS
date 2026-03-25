import { useEffect, useState } from "react";

export function useAuth(){
    const [user,setUser] = useState(null)

    useEffect(()=>{
        const storedUser = localStorage.getItem("user")

        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
    },[])

    const login = (email, password)=>{
        if(email === "user@mail.com" && password === "123"){
            const userData = {name: "Juan", email}
            setUser(userData)
            localStorage.setItem("user", JSON.stringify(userData))
            return true
        }
        return false
    }

    const logout = ()=>{
        setUser(null)
        localStorage.removeItem("user")
    }

    return {user, login, logout}
}