import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {userContext} from '../context/UserProvider'

const NotFound = () => {

  const {user} = useContext(userContext);

  return (
    <div className='not-found'>
        <div className="link-not-found">
            {
              user ?
              <Link to={'/'}>
                <span className='link-not-found primary-button'>Regresar</span>
              </Link>
              :
              <Link to={'/login'}>
                <span className='link-not-found primary-button'>Regresar</span>
              </Link>
            }
        </div>
    </div>
  )
}

export default NotFound