import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)

    const provider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const registerUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const useSignOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    const googleSingIn = () => {
        return signInWithPopup(auth, provider)
    }
    const gitHubSingIn = () => {
        return signInWithPopup(auth, gitProvider)
    }
    const updateProfileChange = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
            
        })
            .then(() => {
                // console.log(result.user)
                setUser({ displayName: name, photoURL: photoUrl })
            })
            .catch(() => {
                // console.log(error.message)
            })
    }
    



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoader(false)
            
        })
        return () => {
            unSubscribe()
        }

    }, [user])


    const userData = { user, loader, registerUser, loginUser, useSignOut, googleSingIn, gitHubSingIn, updateProfileChange}
    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;