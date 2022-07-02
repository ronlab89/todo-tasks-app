import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {formValidate} from '../utils/formValidate'
import { useFirestore } from '../hooks/useFirestore'

import Title from './Title'
import Input from './Input'
import InputSelectColor from './InputSelectColor'
import InputSelect from './InputSelect'
import InputSelectIcons from './InputSelectIcons'
import Button from './Button'
import LoadingButton from './LoadingButton'
import FormErrors from './FormErrors'

const ProjectForm = () => {

    const {register, control, handleSubmit, formState: {errors}, setError, reset, rules} = useForm();
    const {required, validateTrim} = formValidate();
    const { addProject, loading, error } = useFirestore();

    const onSubmit = async({project, selectColor, selectIcon, selectWorkArea}) => {
        const {color} = selectColor;
        const {value: icon} = selectIcon;
        const {value: area} = selectWorkArea;
        console.log(project, color, icon, area);
        try {
            await addProject(project, color, icon, area);  
        } catch (error) {
            console.log(error)
            setError(error.message);
        }finally {
            reset()
        }
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
                  name='project' 
                  {...register('project', {
                    required,
                    validate: validateTrim
                  })}
                />
                <FormErrors error={errors.project} />
                <div className="mb-3">
                    <Controller
                        name="selectColor"
                        control={control}
                        rules={{ required}}
                        render={({ field }) =>
                        <InputSelectColor
                        {...field} 
                        />
                        }
                    />
                <FormErrors error={errors.selectColor} />
                </div>

                <div className="mb-3">
                <Controller
                    name="selectIcon"
                    control={control}
                    rules={{ required }}
                    render={({ field }) =>
                    <InputSelectIcons 
                    {...field} 
                    />
                    }
                />
                <FormErrors error={errors.selectIcon} />
                </div>

                <div className="mb-3">
                <Controller
                    name="selectWorkArea"
                    control={control}
                    rules={{ required }}
                    render={({ field }) =>
                    <InputSelect
                    {...field} 
                    />
                    }
                />
                <FormErrors error={errors.selectWorkArea} />
                </div>
                {
                    loading.add ? 
                    <LoadingButton text={'Creando proyecto'} color='loading-button'/> 
                    :
                    <Button type='submit' text='Crear' className='secondary-button'/>
                }
            </form>
        </section>
    </>
  )
}

export default ProjectForm