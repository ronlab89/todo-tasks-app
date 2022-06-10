import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { FcGoogle } from 'react-icons/fc'
import listCalendar from '/assets/images/listCalendar.jpg'
import listTravel from '/assets/images/listTravel.jpg'

import Title from '../components/Title'
import Input from '../components/Input'
import NavbarWelcome from '../components/NavbarWelcome'
import Button from '../components/Button'

const Register = () => {

    const {register, handleSubmit, formState: {error}, setError} = useForm();

    const onSubmit = ({data}) => {
        console.log(data);
    } 

  return (
    <div className='page'>
        <NavbarWelcome />
        <section className='row'>
        <article className="col-12 text-center">
          <div className="card-form-register">
            <Title text='Crear Cuenta' className='register mb-3' />
            <span className='link'>¿Ya estas registrado? </span><Link to='/login'><span className='link redirect'>Inicia sesión</span></Link>
            <form className='form my-3' onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-4">
                    <Input label='Nombre' type='text' placeholder='Ingrese su nombre' id='name-register'/>
                    </div>
                    <div className="col-lg-4">
                    <Input label='Apellido' type='text' placeholder='Ingrese su apellido' id='lastName-register' />
                    </div>
                    <div className="col-lg-4">
                    <Input label='Correo electronico' type='email' placeholder='Ingrese su correo electronico' id='email-register' />
                    </div>
                    <Input label='Contraseña' type='password' placeholder='Ingrese su contraseña' id='password-register' />
                    <Input label='Repita Contraseña' type='password' placeholder='Repita su contraseña' id='repassword-register' />
                </div>
                    <Button type='submit' text='Continuar' className='primary-button' />
            </form>
            <hr />
            <p className='lead'>O</p>
            <Button type='button' text='Continuar con Google' className='google-button' icon={<FcGoogle />} />
          </div>
        </article>
        <article className="col-12">
          <div className="d-flex justify-content-center justify-content-md-between align-items-center mt-5 mt-lg-0 px-md-4 img-content">
            <img src={listCalendar} alt="Calendario lista de tareas" className='list-calendar d-none d-md-block'/>
            <img src={listTravel} alt="Viajes en lista de tareas" className='list-travel'/>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Register