import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import NavbarWelcome from '../components/NavbarWelcome'
import listTodo from '../../public/assets/images/listTodo.jpg'

const Welcome = () => {

  return (
    <div className='page'>
        <NavbarWelcome />
        <section className='container row'>
            <article className="col-12">
                <p className='text-welcome'>Es momento de organizar tu día a día, se más productivo, agil y eficaz.</p>
                <p className='text-welcome'>¿Estas list@ para comenzar una revolución en tu forma de gestionar proyectos y tareas?</p>
                <Link to={'/login'}>
                    <Button type='button' text='Empezar' className='primary-button' />
                </Link>
            </article>
            <article className="col-12">
                <img src={listTodo} alt="Ilustracion de lista de tareas pendientes" className='img-fluid' width='360'/>
            </article>
        </section>
    </div>
  )
}

export default Welcome