import React from 'react'

const Input = ({label, type, placeholder}) => {
  return (
    <div className="form-floating mb-3">
        <input
          type={type}
          className="form-control"
          id="floatingInput"
          placeholder={placeholder} 
        />
        <label htmlFor="floatingInput">{label}</label>
    </div>
  )
}

export default Input