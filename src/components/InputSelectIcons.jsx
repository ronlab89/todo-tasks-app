import React, { forwardRef } from 'react'
import '../css/InputSelectIcons.css'
import Select from 'react-select'

const InputSelectIcons = forwardRef(({error, onChange, onBlur, name}, ref) => {

  const options = [
    { value: '🖌️', label: '🖌️ Diseño' },
    { value: '📲',label: '📲 Marketing Digital' },
    { value: '🪙', label: '🪙 Blockchain' },
    { value: '💻', label: '💻 Desarrollo Frontend' },
    { value: '🗄️', label: '🗄️ Desarrollo Backend' },
    { value: '🧁', label: '🧁 Reposteria' },
    { value: '🌐', label: '🌐 Idiomas' }
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