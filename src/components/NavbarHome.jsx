import React from 'react'
import '../css/navbarHome.css'
import darkLogo from '/assets/images/logo_dark_nb.png'

import NavIcon from '../components/NavIcon'

const NavbarHome = () => {
  return (
    <nav className='nav-home'>
        <header className='d-flex flex-row justify-content-between align-items-center'>
            <div>
                <img src={darkLogo} alt="Logo Ronlabdev" className='logo-dark' />
            </div>
            <div>
                <NavIcon />
            </div>
        </header>
        <section className='menu-links'>
            <ul>
                <li>Home</li>
                <li>LogOut</li>
            </ul>
        </section>
        <section className='projects'>
            <article className='project'>
                Proyecto desde DB
            </article>
        </section>
    </nav>
  )
}

export default NavbarHome