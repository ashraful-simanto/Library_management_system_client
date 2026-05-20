// import React from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.init";
import { useEffect, useState } from "react";

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const RegisterUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const signOutUser=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {
      RegisterUser,
      loading,
      logInUser,
      user,
      signOutUser,
      signInWithGoogle,
    };
    return (
        <AuthContext value={authInfo}>
            {
                children
            }

        </AuthContext>
    );
};

export default AuthProvider;