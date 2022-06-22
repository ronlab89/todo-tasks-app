import React, { forwardRef } from 'react'
import Select from 'react-select'
import {MdOutlineDesignServices, MdDeveloperMode} from 'react-icons/md'
import {SiMarketo, SiBlockchaindotcom} from 'react-icons/si'
import {FaDatabase} from 'react-icons/fa'
import {CgMenuCake} from 'react-icons/cg'
import {IoLanguage} from 'react-icons/io5'

const design = <MdOutlineDesignServices />
const marketing = <SiMarketo />;
const blockchain = <SiBlockchaindotcom />;
const desarrollo_frontend = <MdDeveloperMode />;
const desarrollo_backend = <FaDatabase />;
const reposteria = <CgMenuCake />;
const idiomas = <IoLanguage />;

const InputSelectIcons = forwardRef(({error, onChange, onBlur, name}, ref) => {

  const options = [
    { value: 'design', label: (<div>{design}</div>) },
    { value: 'marketing',label: (<div>{marketing}</div>) },
    { value: 'blockchain', label: (<div>{blockchain}</div>) },
    { value: 'desarrollo_frontend', label: (<div>{desarrollo_frontend}</div>) },
    { value: 'desarrollo_backend', label: (<div>{desarrollo_backend}</div>) },
    { value: 'reposteria', label: (<div>{reposteria}</div>) },
    { value: 'idiomas', label: (<div>{idiomas}</div>) }
  ]

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

  return (
   <Select options={options} styles={customStyles} placeholder={<div>Definir icono</div>} ref={ref} name={name} onChange={onChange} onBlur={onBlur}/>
  )
})

export default InputSelectIcons