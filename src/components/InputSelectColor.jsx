import React, { forwardRef } from 'react'
import '../css/inputSelectColor.css'
import Select from 'react-select'
import chroma from 'chroma-js';

const InputSelectColor = forwardRef(({error, onChange, onBlur, name}, ref) => {

  const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#4ECDC4', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#526DC6' },
    { value: 'purple', label: 'Purple', color: '#867DDC' },
    { value: 'Violet', label: 'Violet', color: '#AD67CC' },
    { value: 'red', label: 'Red', color: '#FF0000' },
    { value: 'pink', label: 'Pink', color: '#F1A5E8' },
    { value: 'orange', label: 'Orange', color: '#FF6B6B' },
    { value: 'yellow', label: 'Yellow', color: '#FFE66D' },
    { value: 'green', label: 'Green', color: '#5DA283' },
    { value: 'forest', label: 'Forest', color: '#A9C953' },
    { value: 'slate', label: 'Slate', color: '#656667' },
    { value: 'silver', label: 'Silver', color: '#BFBCBC' },
    { value: 'dark', label: 'Dark', color: '#292F36'}
  ];

  const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 12,
      width: 12,
    },
  });

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };


  return (
    <>
    {/* Select con React Select */}
    <Select options={colourOptions} styles={colourStyles} placeholder={<div>Definir color</div>} ref={ref} name={name} onChange={onChange} onBlur={onBlur}/>
    </>
  )
})

export default InputSelectColor