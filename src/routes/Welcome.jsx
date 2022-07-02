import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import NavbarWelcome from '../components/NavbarWelcome'
import { userContext } from '../context/UserProvider'
import listTodo from '/assets/images/listTodo.jpg'

const Welcome = () => {

    const { user } = useContext(userContext);

  return (
    <div className='page'>
        <NavbarWelcome />
        <section className='row m-0 p-5'>
            <article className="col-12 col-lg-6 mb-5 mb-md-0 px-md-5 order-lg-2">
                <div>
                    <p className='text-welcome'>Es momento de organizar tu día a día, se más productivo, agil y eficaz.</p>
                    <p className='text-welcome mb-5 mb-md-4'>¿Estas list@ para comenzar una revolución en tu forma de gestionar proyectos y tareas?</p>
                </div>
                <div className='text-center text-md-end text-xl-start'>
                    {
                        user ?
                        <Link to={'/home'} className="">
                            <Button type='button' text='Empezar' className='primary-button' />
                        </Link>
                        :
                        <Link to={'/login'} className="">
                            <Button type='button' text='Empezar' className='primary-button' />
                        </Link>
                    }
                </div>
            </article>
            <article className="col-12 col-lg-6 order-lg-1">
                <img src={listTodo} alt="Ilustracion de lista de tareas pendientes" className='img-list-todo'/>
            </article>
        </section>
    </div>
  )
}

export default Welcome