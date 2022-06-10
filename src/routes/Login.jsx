import React from 'react'
import { Link } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'
import listCalendar from '/assets/images/listCalendar.jpg'
import listTravel from '/assets/images/listTravel.jpg'

import Button from '../components/Button'
import Input from '../components/Input'


import NavbarWelcome from '../components/NavbarWelcome'
import Title from '../components/Title'

const Login = () => {
  return (
    <div className="page">
      <NavbarWelcome />
      <section className='row'>
        <article className="col-12 text-center">
          <div className="card-form">
            <Title text='Iniciar sesión' className='login mb-3' />
            <span className='link'>¿No estas registrado? </span><Link to='/register'><span className='link redirect'>Crea una cuenta</span></Link>
            <form className='form my-3'>
              <Input label='Correo electronico' type='email' placeholder='Ingrese su correo electronico' />
              <Input label='Contraseña' type='password' placeholder='Ingrese su contraseña' />
              <Button type='submit' text='Continuar' className='primary-button' />
            </form>
            <Link to='/'><span className='link redirect'>¿Olvidaste tu contraseña?</span></Link>
            <hr />
            <p className='lead'>O</p>
            <Button type='button' text='Continuar con Google' className='google-button' icon={<FcGoogle />} />
          </div>
        </article>
        <article className="col-12">
          <div className="d-flex justify-content-center align-items-center mt-5">
            <img src={listCalendar} alt="Calendario lista de tareas" className='list-calendar d-none'/>
            <img src={listTravel} alt="Viajes en lista de tareas" className='list-travel'/>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Login