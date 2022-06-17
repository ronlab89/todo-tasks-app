import React, { useContext } from 'react'
import '../css/navbarHome.css'
import darkLogo from '/assets/images/logo_dark_nb.png'
import { Link } from 'react-router-dom'
import {FaHome, FaSignOutAlt, FaPlus, FaEdit, FaEraser, FaStar, FaProjectDiagram, FaCheck} from 'react-icons/fa'

import NavIcon from '../components/NavIcon'
import { navIconContext } from '../context/NavIconProvider'

const NavbarHome = ({handleLogOut}) => {

    const {toggleMenu} = useContext(navIconContext);

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
                <li className='nav-item menu-link'><FaHome /><Link to={'/home'}> Home</Link></li>
                <li className='nav-item menu-link' onClick={handleLogOut}><FaSignOutAlt /> LogOut</li>
            </ul>
        </section>
        <section className='projects'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <h3 className='mb-4'>Proyectos</h3>
                <span className=''><FaPlus /></span>
            </div>
            <article className='project'>
                Proyecto desde DB
            </article>
        </section>
    </nav>
  )
}

export default NavbarHome