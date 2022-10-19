import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();


function useAuth(){
    return useContext(AuthContext);
} 

function AuthProvider({children}){
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser({...user});
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // auth signup FUNCTION
    async function signUp(email, password, username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // Update profile
        await updateProfile(auth.currentUser, {displayName:username});

        const user = auth.currentUser;

        setCurrentUser({...user});

    }

    async function login(email, password){
        const auth = getAuth();
        return await signInWithEmailAndPassword(auth, email, password);
    }

    async function logout(){
        const auth = getAuth();
        return await signOut(auth);
    }

    const value = {
        authUser: currentUser,
        signUp,
        login,
        logout
    };
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
} 


export { AuthProvider, useAuth };
