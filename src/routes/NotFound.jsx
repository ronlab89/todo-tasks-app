import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <div className="link-not-found">
            <Link to={'/'}>Regresar</Link>
        </div>
    </div>
  )
}

export default NotFound