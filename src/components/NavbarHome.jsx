import React, { useContext } from 'react'
import '../css/navbarHome.css'
import darkLogo from '/assets/images/logo_dark_nb.png'
import { Link } from 'react-router-dom'
import {FaHome, FaSignOutAlt, FaPlus, FaEdit, FaEraser, FaStar, FaProjectDiagram, FaCheck} from 'react-icons/fa'
import { navIconContext } from '../context/NavIconProvider'
import { userContext } from '../context/UserProvider'

import NavIcon from '../components/NavIcon'
import { useFirestore } from '../hooks/useFirestore'
import Loading from './Loading'

const NavbarHome = ({handleLogOut}) => {
    const {toggleMenu} = useContext(navIconContext);
    const {user} = useContext(userContext);

    const {dataProjects, error, loading, deleteProject} = useFirestore();

    const handleDeleteProject = async(idpro) => {
        console.log('Eliminando Proyecto', idpro);
        await deleteProject(idpro);
    }


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
                    <Link to={'/home'}> <span className='link-home'>Home</span></Link>
                </li>
                <li className='nav-item menu-link' onClick={handleLogOut}><FaSignOutAlt /> LogOut</li>
            </ul>
        </section>
        <hr />
        <section className='projects'>
            <div className='d-flex justify-content-between'>
                <h3 className=''>Proyectos</h3>
               <Link to={'/home'}><span className=''><FaPlus /></span></Link>
            </div>
            <article className='project mt-4'>
                {
                    (error) && <p>{error}</p>
                }
                {
                (loading.getProjects) ? 
                    <Loading text={'Cargando proyectos'} color='primary' />
                    :
                    dataProjects.map(pro => (
                        <div className='d-flex justify-content-between align-items-center mb-2' key={pro.idpro}>
                            <div className='d-flex justify-content-start align-items-center'>
                                <div className='color-project' style={{backgroundColor: pro.color}}></div>
                                <p className='mb-0 ms-2'>{pro.project}</p>
                            </div>
                            <div className=''>
                                <span className='ms-2 toolProject'><FaEdit /></span>
                                {
                                    loading[pro.idpro] ?
                                    <span className='ms-2 spinner-grow spinner-grow-sm text-light' role='status'></span>
                                    :
                                    <span className='ms-2 toolProject' onClick={() => handleDeleteProject(pro.idpro)}><FaEraser /></span>
                                }
                                <span className='ms-2 toolProject'><FaStar /></span>
                            </div>
                        </div>
                    ))
                }
            </article>
        </section>
    </nav>
  )
}

export default NavbarHome