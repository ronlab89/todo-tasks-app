import React from 'react'
import {Outlet} from 'react-router-dom'

const LayoutApp = () => {
  return (
    <div className=''>
        <Outlet />
    </div>
  )
}

export default LayoutApp