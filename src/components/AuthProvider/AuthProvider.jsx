import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // register page
    const createUser =(email, password)=>{ 
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login page
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // observe current user by using useState and useEffect
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('auth state changed', currentUser)
        })
        return()=>{unsubscribe()}
    },[])
// signOut or log out 
const logOut = ()=>{
    return signOut(auth)
}
// function pass as an object
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;