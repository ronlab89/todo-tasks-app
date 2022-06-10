import React from 'react'

const Input = ({label, type, placeholder, id}) => {
  return (
    <div className="form-floating mb-3">
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder} 
        />
        <label htmlFor={id} className='label'>{label}</label>
    </div>
  )
}

export default Input