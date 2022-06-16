import React, { createContext, useState } from 'react'

const navIconContext = createContext(); 

const NavIconProvider = ({children}) => {

    const [toggleMenu, setToggleMenu] = useState(true);

    const handleToggleMenu = (e) => {
        e.preventDefault();
        setToggleMenu(!toggleMenu);
    }


  return (
    <navIconContext.Provider value={{toggleMenu, setToggleMenu, handleToggleMenu}}>
        {children}
    </navIconContext.Provider>
  )
}

export {NavIconProvider, navIconContext}