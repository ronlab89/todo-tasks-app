import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbarHome.css'
import darkLogo from '/assets/images/logo_dark_nb.png'
import {FaHome, FaSignOutAlt, FaPlus, FaEdit, FaEraser, FaRegStar, FaStar, FaProjectDiagram, FaCheck} from 'react-icons/fa'
import { navIconContext } from '../context/NavIconProvider'
import { firestoreContext } from '../context/FirestoreProvider'
import { favoriteContext } from '../context/FavoriteProvider'

import NavIcon from '../components/NavIcon'
import Loading from './Loading'
import { useState } from 'react'

const NavbarHome = ({handleLogOut}) => {
    const {toggleMenu} = useContext(navIconContext);
    const {dataProjects, error, loading, getProjects, deleteProject, updateProject} = useContext(firestoreContext);
    const {favorites, isFavorite, updateFavorite, updateFavoriteProject} = useContext(favoriteContext);

    const [edit, setEdit] = useState({state: false, id: ''});
    
    console.log(favorites.id);
     
    useEffect(() => {
        console.log('getProjects');
        getProjects();
    }, []);


    const handleDeleteProject = async(idpro) => {
        console.log('Eliminando Proyecto', idpro);
        await deleteProject(idpro);
    }

    const handleEditProject = async(pro) => {
        setEdit({state: true, id: pro.idpro});
    }

    const handleKeySubmit = (e, idpro) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            const name = e.target.value;
            editNameProject(idpro, name);
        }
    }

    const editNameProject = (idpro, name) => {
        updateProject(idpro, name);
        setEdit({state: false, id: ''});
    }

    const handleFavorite = (pro) => {
        updateFavorite(pro.idpro);
        const projectFav = {
            id: pro.idpro,
            project: pro.project,
            color: pro.color,
            icon: pro.icon,
            area: pro.area 
        };
        updateFavoriteProject(projectFav);
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
                                {
                                    edit.state === true && edit.id === pro.idpro ?  
                                    <form>
                                        <input className='form-control-sm' onKeyDown={(e) => handleKeySubmit(e, pro.idpro)} type='text'  />
                                    </form>
                                    :
                                    <p className='mb-0 ms-2'>{pro.project}</p>
                                }
                                <span className='d-none'>{pro.uid}</span>
                            </div>
                            <div className=''>
                                {
                                    loading[pro.idpro] && loading.type === 'update' ?
                                    <span className='ms-2 spinner-grow spinner-grow-sm text-primary' role='status'></span>
                                    :
                                    <span className='ms-2 toolProject tool-update' onClick={() => handleEditProject(pro)}><FaEdit /></span>
                                }
                                {
                                    loading[pro.idpro] && loading.type === 'delete' ?
                                    <span className='ms-2 spinner-grow spinner-grow-sm text-danger' role='status'></span>
                                    :
                                    <span className='ms-2 toolProject tool-eraser' onClick={() => handleDeleteProject(pro.idpro)}><FaEraser /></span>
                                }
                                <span
                                  className='ms-2 toolProject tool-star'
                                  onClick={() => handleFavorite(pro)}
                                >
                                    {
                                        isFavorite.includes(pro.idpro) ?
                                        <FaStar style={{color: '#ffe66d', borderColor: '#ffe66d'}}/> :
                                        <FaRegStar />
                                    }
                                </span>
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