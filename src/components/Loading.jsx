import React from 'react'

const Loading = ({text, color}) => {
  return (
    <div className="text-center">
    <div className={`spinner-grow ${color}`} role="status">
        <span className=''>{text}</span>
    </div>
    </div>
  )
}

export default Loading