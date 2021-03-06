import { createContext, useEffect, useState } from "react"
import { auth, provider } from '../firebaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const userContext = createContext();

const UserProvider = ({children}) => {
  
    const [user, setUser] = useState(false);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, user => {
            console.log(user);
            if(user){
                const {email, photoURL, displayName, uid} = user;
                setUser({email, photoURL, displayName, uid})
            }else{
                setUser(null);
            }
        })
        return () => unsuscribe();
    }, [])

    //Auth with email
    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth);
    const userCreate = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    
    //Reset password
    const passwordReset = (email) => sendPasswordResetEmail(auth, email);

    //Auth with Google Count
    const loginGoogle = () => signInWithPopup(auth, provider);
  
    return (
    <userContext.Provider value={{user, logIn, logOut, userCreate, loginGoogle, passwordReset}}>
        {children}
    </userContext.Provider>
  )
}

export {UserProvider, userContext};