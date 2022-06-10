import React from 'react'
import '../css/navbarWelcome.css'
import logo from '/assets/images/logo_light_nb.png'
import { Link } from 'react-router-dom'

const NavbarWelcome = () => {
  return (
    <div className='row g-0 navWelcome'>
        <div className="col-10">
            <h1 className='title-app'>Todo Tasks App</h1>
        </div>
        <div className="col-2 text-end">
          <Link to={'/'}>
            <img src={logo} alt="Logo Ronlabdev" width='50' height='33px' className=''/>
            <p className='nameLogo'>RONLABDEV</p>
          </Link>
        </div>
    </div>
  )
}

export default NavbarWelcome