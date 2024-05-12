

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // sign in 
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout
    const logOut =() => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

    useEffect(()=>{
        const unsubscribe =   onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
            // if user exists then issue a token
            if(currentUser){
                const loggedUser = {email: currentUser.email}
                axios.post('https://y-theta-weld.vercel.app/jwt',loggedUser,{withCredentials:true})
                .then(res => {
                    console.log('token response',res)
                })
            }
        })
        return () =>{
            return unsubscribe()
        }
    },[])
    const authInfo ={
        user,
        createUser,
        signIn,
        loading,
        logOut,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;