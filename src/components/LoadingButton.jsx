import React from 'react'

const LoadingButton = ({text, color}) => {
  return (
    <button class={`btn ${color}`} type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    {text}
    </button>
  )
}

export default LoadingButton