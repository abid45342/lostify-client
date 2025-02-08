import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.init';



export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })

    }

    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const singInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(user)
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post('https://server-delta-eight-10.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        setLoading(false);

                        console.log("login token", res.data);
                    })
            }
            else {
                axios.post('https://server-delta-eight-10.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        setLoading(false);
                        console.log("logout token", res.data);
                    })
            }
            setLoading(false);
        });
        return unsubscribe;
    }, [])






    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        singInUser,
        singInWithGoogle,
        signOutUser,
        updateUserProfile,
        setLoading,



    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );




};

export default AuthProvider;
