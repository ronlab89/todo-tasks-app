import React from 'react'
import { useForm } from 'react-hook-form'
import {formValidate} from '../utils/formValidate'

import Title from './Title'
import Input from './Input'
import InputSelectColor from './InputSelectColor'
import InputSelect from './InputSelect'

const ProjectForm = () => {

    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const {required, validateTrim} = formValidate();

  return (
    <>
        <section className='card card-new-project'>
            <Title text='Nuevo Proyecto' className='new-project' />
            <form className='mt-4'>
                <Input
                  label='Nombre del proyecto'
                  type='text'
                  placeholder='Ingrese nombre del proyecto'
                  id='newProject'
                  error={errors.project}
                  name='project' 
                  {...register('project', {
                    required,
                    validate: validateTrim
                  })}
                />

                <div className="mb-3">
                    <InputSelectColor/>
                </div>
                <div className="mb-3">
                    <InputSelect optionsArray={[
                        { value: 'diseño', label: 'Diseño' },
                        { value: 'marketing', label: 'Marketing' },
                        { value: 'blockchain', label: 'Blockchain'},
                        { value: 'desarrollo_frontend', label: 'Desarrollo Frontend' },
                        { value: 'desarrollo_backend', label: 'Desarrollo Backend'},
                        { value: 'reposteria', label: 'Reposteria'},
                        { value: 'idiomas', label: 'Idiomas'}
                    ]}/>
                </div>
            </form>
        </section>
    </>
  )
}

export default ProjectForm