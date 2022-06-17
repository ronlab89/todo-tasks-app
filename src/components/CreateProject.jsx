import React, { useContext } from 'react'
import { navIconContext } from '../context/NavIconProvider'
import '../css/CreateProject.css'

import NavIcon from '../components/NavIcon'
import Title from '../components/Title'

const CreateProject = () => {

    const {toggleMenu} = useContext(navIconContext);

  return (
    <section className={`${toggleMenu ? 'page-project-active' : 'page-project'}`}>
        <header className='d-flex flex-row justify-content-between align-items-center'>
            <div>
                <div className={`${toggleMenu ? 'd-none' : 'd-block'}`}>
                    <NavIcon />
                </div>
                <Title text='Inicio' className='title-home' />
            </div>
            <div>
                User
            </div>
        </header>
    </section>
  )
}

export default CreateProject