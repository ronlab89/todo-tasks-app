import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'
import NavbarHome from '../components/NavbarHome';
import NavIcon from '../components/NavIcon';
import { navIconContext } from '../context/NavIconProvider';
import { userContext } from '../context/UserProvider'

const Home = () => {

  const {logOut} = useContext(userContext);
  const {toggleMenu} = useContext(navIconContext);
  const navigate = useNavigate();

  const handleLogOut = async(e) => {
    e.preventDefault();
    await logOut();
    navigate('/login');
  }

  return (
    <>
      <NavbarHome handleLogOut={handleLogOut}/>
      <div className=''>
        <NavIcon />
      </div>
    </>
  )
}

export default Home