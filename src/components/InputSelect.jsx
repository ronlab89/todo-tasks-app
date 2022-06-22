import React, { forwardRef } from 'react'
import Select from 'react-select'

const InputSelect = forwardRef(({error, onChange, onBlur, name}, ref) => {

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? 'white' : 'black',
          background: state.isSelected ? '#4ECDC4' : state.isFocused ? 'hsl(176, 89%, 90%)' : 'white',
          padding: 10,
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
          return { ...provided, opacity, transition };
        }
      }

      const optionsArray =[
        { value: 'diseño', label: 'Diseño' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'blockchain', label: 'Blockchain'},
        { value: 'desarrollo_frontend', label: 'Desarrollo Frontend' },
        { value: 'desarrollo_backend', label: 'Desarrollo Backend'},
        { value: 'reposteria', label: 'Reposteria'},
        { value: 'idiomas', label: 'Idiomas'}
    ]

  return (
    <Select options={optionsArray} styles={customStyles} placeholder={<div>Elegir area</div>} ref={ref} name={name} onChange={onChange} onBlur={onBlur} />
  )
})

export default InputSelect