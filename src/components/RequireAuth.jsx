import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { userContext } from '../context/UserProvider'

const RequireAuth = () => {

    const { user } = useContext(userContext);

    if(!user) {
        return <Navigate to={'/'} />
    }


  return (
    <div className='home'>
        <Outlet />
    </div>
  )
}

export default RequireAuth