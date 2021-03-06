import React, { forwardRef } from 'react'
import '../css/InputSelectIcons.css'
import Select from 'react-select'

const InputSelectIcons = forwardRef(({error, onChange, onBlur, name}, ref) => {

  const options = [
    { value: 'ποΈ', label: 'ποΈ DiseΓ±o' },
    { value: 'π²',label: 'π² Marketing Digital' },
    { value: 'πͺ', label: 'πͺ Blockchain' },
    { value: 'π»', label: 'π» Desarrollo Frontend' },
    { value: 'ποΈ', label: 'ποΈ Desarrollo Backend' },
    { value: 'π§', label: 'π§ Reposteria' },
    { value: 'π', label: 'π Idiomas' }
  ]

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      background: state.isSelected ? '#4ECDC4' : state.isFocused ? 'hsl(176, 89%, 90%)' : 'white',
      padding: 10,
    }),
  }

  return (
   <Select options={options} styles={customStyles} placeholder={<div>Definir icono</div>} ref={ref} name={name} onChange={onChange} onBlur={onBlur}/>
  )
})

export default InputSelectIcons