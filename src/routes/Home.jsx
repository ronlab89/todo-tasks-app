import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'
import { userContext } from '../context/UserProvider'

const Home = () => {

  const {logOut} = useContext(userContext);
  const navigate = useNavigate();

  const handleLogOut = async(e) => {
    e.preventDefault();
    await logOut();
    navigate('/login');
  }

  return (
    <div>
      Home
    <Button type='button' text='Log Out' onclick={handleLogOut} className='primary-button' />
    </div>
  )
}

export default Home