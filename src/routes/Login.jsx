import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { formValidate } from '../utils/formValidate'
import { erroresFirebase } from '../utils/erroresFirebase'
import { userContext } from '../context/UserProvider'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { FcGoogle } from 'react-icons/fc'
import listCalendar from '/assets/images/listCalendar.jpg'
import listTravel from '/assets/images/listTravel.jpg'

import Button from '../components/Button'
import Input from '../components/Input'
import NavbarWelcome from '../components/NavbarWelcome'
import Title from '../components/Title'
import FormErrors from '../components/FormErrors'
import LoadingButton from '../components/LoadingButton'
import ModalPassword from '../components/ModalPassword'
import NavbarHome from '../components/NavbarHome'

const Login = () => {

  const {logIn, loginGoogle, passwordReset} = useContext(userContext);

  const {register, handleSubmit, formState: {errors}, setError, getValues} = useForm();
  const {required, validateTrim, minLength, patternEmail} = formValidate();
  const [loading, setLoading] = useState({});
  const [emailPasswordReset, setEmailPasswordReset] = useState();

  const navigate = useNavigate();

  const onSubmit = async({email, password}) => {
    console.log(email, password);
    try {
      setLoading(prev => ({...prev, loginEmail: true}));
      await logIn(email, password)
      navigate('/');
    } catch (error) {
      console.log(error.code);
      const {code, message} = erroresFirebase(error.code);
      setError(code, {message})
    }finally {
      setLoading(prev => ({...prev, loginEmail: false}));
    }
  }

  const handleGoogleLogin = async(e) => {
    e.preventDefault();
    console.log('Login with Google working')
    try {
      setLoading(prev => ({...prev, loginApiGoogle: true}));
      await loginGoogle();
      navigate('/');
    } catch (error) {
      console.log(error.code);
      const {code, message} = erroresFirebase(error.code);
      setError(code, {message})
    } finally {
      setLoading(prev => ({...prev, loginApiGoogle: false}));
    }
  }

  const handlePasswordReset = async() => {
    console.log('Working Reset');
    try {
      setLoading(prev => ({...prev, reset: true}));
      await passwordReset(emailPasswordReset);
    } catch (error) {
      console.log(error.code);
      const {code, message} = erroresFirebase(error.code);
      setError(code, {message})
    } finally {
      setLoading(prev => ({...prev, reset: false}));
      if(!errors) {
        toast.success('🦄 Email de recuperacion enviado!', {
          position: "top-center",
          autoClosed: 5000,
          hideProgrssBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  return (
    <>
    <NavbarHome />
    <div className="page">
      <NavbarWelcome />
      <section className='row'>
        <article className="col-12 text-center">
          <div className="card-form">
            <Title text='Iniciar sesión' className='login mb-3' />
            <span className='link'>¿No estas registrado? </span><Link to='/register'><span className='link redirect'>Crea una cuenta</span></Link>
            <form className='form my-3' onSubmit={handleSubmit(onSubmit)}>
              <Input label='Correo electronico' type='email' placeholder='Ingrese su correo electronico' id='email-login' error={errors.email && 'error-input'} 
              {...register('email', {
                required,
                pattern: patternEmail,
                validate: validateTrim
              })}
              />
              <FormErrors error={errors.email} />
              <Input label='Contraseña' type='password' placeholder='Ingrese su contraseña' id='password-login' error={errors.password && 'error-input'}
              {...register('password', {
                required,
                minLength,
                validate: validateTrim
              })}
              />
              <FormErrors error={errors.password} />
              {
                loading.loginEmail ? 
                <LoadingButton text='Iniciando sesion' color='loading-button' /> 
                :
                <Button type='submit' text='Continuar' className='primary-button' />
              }
            </form>
            
            <ModalPassword setEmailPasswordReset={setEmailPasswordReset} handlePasswordReset={handlePasswordReset} loading={loading} />
            <hr />
            <p className='lead'>O</p>
            {
              loading.loginApiGoogle ? 
              <LoadingButton text='Accediendo con Google' color='loading-button' /> 
              :
              <Button type='button' text='Continuar con Google' className='google-button' onclick={handleGoogleLogin} icon={<FcGoogle />} />
            }
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
  </>
  )
}

export default Login