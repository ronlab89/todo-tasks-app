import React, { useContext } from 'react'
import { navIconContext } from '../context/NavIconProvider'
import '../css/createProject.css'

import NavIcon from '../components/NavIcon'
import Title from '../components/Title'
import UserIcon from '../components/UserIcon'
import moment from 'moment'
import 'moment/locale/es'
import { userContext } from '../context/UserProvider'
import ProjectForm from './ProjectForm'
import ProjectFavorite from './ProjectFavorite'
import ProjectCount from './ProjectCount'
import FinishTasks from './FinishTasks'

const CreateProject = () => {

    const {toggleMenu} = useContext(navIconContext);
    const {user} =useContext(userContext);

    moment.locale('es');
    const todayDate = moment().format('MMMM DD YYYY, LTS');
    const todayTime = moment().hours();

    let saidHi;

    if(todayTime >= 4 && todayTime < 12) {
        saidHi = 'Buenos dias';
    }else if(todayTime >= 12 && todayTime < 19) {
        saidHi = 'Buenas tardes';
    }else if(todayTime >= 19 && todayTime <23) {
        saidHi = 'Buenas noches'
    }else if(todayTime >=0 && todayTime <4) {
        saidHi = 'Buenas Noches'
    }

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
            <div className="row mt-5">
                <div className="col-6">
                   <span className='hi'>{saidHi} {user.email} </span>  
                </div>
                <div className="col-6 text-end">
                    <span className='date'>{todayDate}</span>
                </div>
            </div>
        <section className='project-area row g-5'>
            <article className='col-lg-6'>
                <ProjectForm />
            </article>
            <article className='col-lg-6'>
                <ProjectFavorite />
            </article>
            <article className='col-lg-6'>
                <ProjectCount />
            </article>
            <article className='col-lg-6'>
                <FinishTasks />
            </article>
        </section>
    </section>
  )
}

export default CreateProject