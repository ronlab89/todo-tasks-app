import React from 'react'

const Loading = ({text, color}) => {
  return (
    <div className="text-start">
    <div className={`spinner-grow spinner-grow-sm ${color}`} role="status">
    </div>
        <span className=''>{text}</span>
    </div>
  )
}

export default Loading