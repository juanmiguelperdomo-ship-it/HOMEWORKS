import { createContext, useEffect, useState } from "react";
import { useAuth } from "../CustomHooks/useAuth";

export const AuthContext = createContext()

export function AuthProvider({children}){
    const {user, login, logout, loading, register} = useAuth()
    return(
        <AuthContext.Provider value={{user, login, logout, loading, register}}>
            {children}
        </AuthContext.Provider>
    )
}


