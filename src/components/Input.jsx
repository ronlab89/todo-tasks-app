import React, { forwardRef } from 'react'
import '../css/input.css'

const Input = forwardRef(({label, type, placeholder, id, error, onChange, onBlur, name}, ref) => {
  return (
    <div className="form-floating mb-3">
        <input
          type={type}
          className={`form-control ${error}`}
          id={id}
          placeholder={placeholder} 
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        <label htmlFor={id} className='label'>{label}</label>
    </div>
  )
});

export default Input