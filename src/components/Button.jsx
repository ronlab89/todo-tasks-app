import React from 'react'

const Button = ({type, text, onclick, className}) => {
  return (
    <button
      type={type}
      className={className}
      onclick={onclick}  
    >
        {text}
    </button>
  )
}

export default Button