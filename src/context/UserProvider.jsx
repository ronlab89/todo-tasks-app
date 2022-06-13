import { createContext, useState } from "react"
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";

const userContext = createContext();

const UserProvider = ({children}) => {
  
    const [user, setUser] = useState(false);

    const signIn = (email, password) => {
        setUser(true);
        signInWithEmailAndPassword(auth, email, password);
    }

    const signOut = () => {
        setUser(false);
    }
  
    return (
    <userContext.Provider value={{user, signIn, signOut}}>
        {children}
    </userContext.Provider>
  )
}

export {UserProvider, userContext};