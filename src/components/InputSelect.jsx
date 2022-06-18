import React from 'react'
import Select from 'react-select'

const InputSelect = ({optionsArray}) => {

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? 'white' : 'black',
          background: state.isSelected ? 'green' : 'white',
          padding: 10,
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
          return { ...provided, opacity, transition };
        }
      }

    const options = optionsArray

  return (
    <Select options={options} styles={customStyles}/>
  )
}

export default InputSelect