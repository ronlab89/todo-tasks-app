import React, { forwardRef } from 'react'

const Input = forwardRef(({label, type, placeholder, id, onChange, onBlur, name}, ref) => {
  return (
    <div className="form-floating mb-3">
        <input
          type={type}
          className="form-control"
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