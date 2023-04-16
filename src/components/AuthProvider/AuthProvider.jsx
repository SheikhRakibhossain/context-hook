import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // register page
    const createUser =(email, password)=>{ 
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login page
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    };
    // google sign in and sign up
    const googleAuthProvider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleAuthProvider)
    }

    // observe current user by using useState and useEffect
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('auth state changed', currentUser);
            setLoading(false)
        })
        return()=>{unsubscribe()}
    },[]);
// signOut or log out 
const logOut = ()=>{
    return signOut(auth)
}
// function pass as an object
    const authInfo = {
        user,
        createUser,
        signInWithGoogle,
        signIn,
        logOut,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;