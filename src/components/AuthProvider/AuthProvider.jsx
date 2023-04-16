import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
// function pass as an object
    const authInfo = {
        user,
        createUser,
        signIn
    };
    // const couple = {CoupleName:"SonalyRakib"}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;