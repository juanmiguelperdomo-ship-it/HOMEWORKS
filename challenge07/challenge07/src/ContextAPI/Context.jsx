import { createContext, useEffect, useState } from "react";
import { useAuth } from "../CustomHooks/useAuth";

export const AuthContext = createContext()

export function AuthProvider({children}){
    const {user, login, logout} = useAuth()
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}



