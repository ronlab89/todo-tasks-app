import React, { useContext } from 'react'
import '../css/navbarHome.css'
import darkLogo from '/assets/images/logo_dark_nb.png'
import { Link } from 'react-router-dom'
import {FaHome, FaSignOutAlt, FaPlus, FaEdit, FaEraser, FaStar, FaProjectDiagram, FaCheck} from 'react-icons/fa'
import { navIconContext } from '../context/NavIconProvider'
import { userContext } from '../context/UserProvider'

import NavIcon from '../components/NavIcon'

const NavbarHome = ({handleLogOut}) => {

    const {toggleMenu} = useContext(navIconContext);
    const {user} = useContext(userContext);

  return (
    <nav className={`${toggleMenu ? 'nav-home-active' : 'nav-home'}`}>
        <header className='d-flex flex-row justify-content-between align-items-center px-2 py-2'>
            <div>
                <img src={darkLogo} alt="Logo Ronlabdev" className='logo-dark' />
            </div>
            <div>
                <NavIcon/>
            </div>
        </header>
        <section className='menu-links'>
            <ul className='navbar-nav'>
                <li className='nav-item menu-link'>
                    <FaHome />
                    <Link to={'/'}> <span className='link-home'>Home</span></Link>
                </li>
                <li className='nav-item menu-link' onClick={handleLogOut}><FaSignOutAlt /> LogOut</li>
            </ul>
        </section>
        <hr />
        <section className='projects'>
            <div className='d-flex justify-content-between'>
                <h3 className=''>Proyectos</h3>
               <Link to={'/'}><span className=''><FaPlus /></span></Link>
            </div>
            <article className='project mt-4'>
                Proyecto desde DB
            </article>
        </section>
    </nav>
  )
}

export default NavbarHome