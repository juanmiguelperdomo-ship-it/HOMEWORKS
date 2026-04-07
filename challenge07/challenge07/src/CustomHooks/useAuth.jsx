import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import firebase from "firebase/compat/app";

export function useAuth(){
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const remove = onAuthStateChanged(auth, (firebaseUser)=>{
                        setUser(firebaseUser)
                        setLoading(false)
        })
        return ()=> remove()
    },[])


    const login = async(email, password)=>{
        await signInWithEmailAndPassword(auth, email, password)
    }

    const register = async(email, password)=>{
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = async(email, password)=>{
        await signOut(auth)
    }


    return {user, login, register, logout, loading}
}