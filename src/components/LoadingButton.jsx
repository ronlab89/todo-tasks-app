import React from 'react'

const LoadingButton = ({text, color}) => {
  return (
    <button className={`btn ${color}`} type="button" disabled>
    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    {text}
    </button>
  )
}

export default LoadingButton