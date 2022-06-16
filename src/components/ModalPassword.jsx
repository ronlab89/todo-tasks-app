import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { formValidate } from '../utils/formValidate';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Input from '../components/Input'
import FormErrors from '../components/FormErrors'
import LoadingButton from './LoadingButton';

const ModalPassword = ({setEmailPasswordReset, handlePasswordReset, loading}) => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const {required, patternEmail, validateTrim} = formValidate();

  const [modalOpen, setModalOpen] = useState(false)
  

  const toggle = () => {
    setModalOpen(!modalOpen);
  }

  const onSubmit = ({emailReset}) => {
    setEmailPasswordReset(emailReset);
    handlePasswordReset();
  }

  return (
    <>
      <div>
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      <Link to={'#'} onClick={toggle}><span className='link redirect'>¿Olvidaste tu contraseña?</span></Link>
        
        <Modal
          centered
          fullscreen
          isOpen={modalOpen}
          toggle={toggle}
        >
          <ModalHeader toggle={toggle}>
            Recupera tu contraseña
          </ModalHeader>
          <ModalBody>
            Ingresa el correo electronico con el que creaste tu cuenta de usuario, si se encuentra en nuestra base de datos te enviaremos un email con el link para que recuperes tu contraseña y puedas acceder nuevamente a la aplicacion.
            <form className='formReset' onSubmit={handleSubmit(onSubmit)}>
              <Input
                label='Correo
                electronico'
                type='email'
                placeholder='Ingresa tu correo electronico'
                id='password-reset'
                error={errors.emailReset && 'error-input'}
                name='emailReset'
                {...register('emailReset', {
                  required,
                  pattern: patternEmail,
                  validate: validateTrim
                })}
              />
              <FormErrors error={errors.emailReset}/>
              <div className='text-end'>
              {
                loading.reset ? 
                  <LoadingButton text='Enviando Email de recuperacion' color='loading-button'/>
                :
                  <Button type='submit' className='secondary-button'>
                    Enviar
                  </Button>
              }
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            {' '}
            <Button onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
    )
}

export default ModalPassword