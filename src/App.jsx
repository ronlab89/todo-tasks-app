import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutApp from './components/LayoutApp'
import RequireAuth from './components/RequireAuth'

import Welcome from './routes/Welcome'
import Login from './routes/Login'
import Register from './routes/Register'
import Home from './routes/Home'
import NotFound from './routes/NotFound'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<RequireAuth />}>
          <Route path='/home' element={<Home />} />
        </Route>

        <Route path='/' element={<LayoutApp />}>
        <Route index element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
