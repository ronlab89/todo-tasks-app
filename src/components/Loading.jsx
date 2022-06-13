import React from 'react'

const Loading = ({text, color}) => {
  return (
    <div class="text-center">
    <div class={`spinner-grow ${color}`} role="status">
        <span class=''>{text}</span>
    </div>
    </div>
  )
}

export default Loading