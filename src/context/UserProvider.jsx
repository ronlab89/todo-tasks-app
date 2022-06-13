import { createContext, useState } from "react"

const userContext = createContext();

const UserProvider = ({children}) => {
  
    const [user, setUser] = useState(false);

    const signIn = () => {
        setUser(true);
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