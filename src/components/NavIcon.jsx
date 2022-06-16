import React, { useContext } from 'react'
import { navIconContext } from '../context/NavIconProvider'
import '../css/navIcon.css'

const NavIcon = () => {

  const {handleToggleMenu} = useContext(navIconContext);

  return (
    <div className='iconMenu' onClick={handleToggleMenu}>NavIcon</div>
  )
}

export default NavIcon