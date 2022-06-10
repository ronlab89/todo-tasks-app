import React from 'react'
import '../css/button.css'

const Button = ({type, text, onclick, className, icon}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onclick}  
    >
       {icon} {text}
    </button>
  )
}

export default Button