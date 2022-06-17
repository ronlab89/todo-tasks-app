import React, { useContext } from 'react'
import { navIconContext } from '../context/NavIconProvider'
import '../css/createProject.css'

import NavIcon from '../components/NavIcon'
import Title from '../components/Title'
import UserIcon from '../components/UserIcon'

const CreateProject = () => {

    const {toggleMenu} = useContext(navIconContext);

  return (
    <section className={`${toggleMenu ? 'page-project-active' : 'page-project'}`}>
        <header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className={`${toggleMenu ? 'd-none' : 'd-block'} ms-3`}>
                    <NavIcon />
                </div>
                <Title text='Inicio' className='title-home mb-0 ms-3' />
            </div>
            <div>
                <UserIcon />
            </div>
        </header>
    </section>
  )
}

export default CreateProject