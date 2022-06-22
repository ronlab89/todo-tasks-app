import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {formValidate} from '../utils/formValidate'

import Title from './Title'
import Input from './Input'
import InputSelectColor from './InputSelectColor'
import InputSelect from './InputSelect'
import InputSelectIcons from './InputSelectIcons'
import Button from './Button'

const ProjectForm = () => {

    const {register, control, handleSubmit, formState: {errors}, setError} = useForm();
    const {required, validateTrim} = formValidate();

    const onSubmit = (data) => {
        console.log(data);
    } 

  return (
    <>
        <section className='card card-new-project'>
            <Title text='Nuevo Proyecto' className='new-project' />
            <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
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
                    <Controller
                        name="selectColor"
                        control={control}
                        render={({ field }) =>
                        <InputSelectColor
                        {...field} 
                        />
                        }
                    />
                </div>

                <div className="mb-3">
                <Controller
                    name="selectIcon"
                    control={control}
                    render={({ field }) =>
                    <InputSelectIcons 
                    {...field} 
                    />
                    }
                />
                </div>

                <div className="mb-3">
                <Controller
                    name="selectWorkArea"
                    control={control}
                    render={({ field }) =>
                    <InputSelect
                    {...field} 
                    />
                    }
                />
                </div>

                <Button type='submit' text='Crear' className='secondary-button'/>
            </form>
        </section>
    </>
  )
}

export default ProjectForm