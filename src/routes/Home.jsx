import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserProvider'

import NavbarHome from '../components/NavbarHome';
import CreateProject from '../components/CreateProject';

const Home = () => {

  const {logOut} = useContext(userContext);
  const navigate = useNavigate();

  const handleLogOut = async(e) => {
    e.preventDefault();
    await logOut();
    navigate('/login');
  }

  return (
    <>
      <NavbarHome handleLogOut={handleLogOut}/>
      <CreateProject />
    </>
  )
}

export default Home