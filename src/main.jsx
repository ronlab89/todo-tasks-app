import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import RequireAuth from './components/RequireAuth'

import Welcome from './routes/Welcome'
import Login from './routes/Login'
import Register from './routes/Register'
import Home from './routes/Home'
import {UserProvider} from './context/UserProvider'
import NotFound from './routes/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <Routes>

        <Route path='/' element={<App />}>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Route>

        <Route path='/' element={<RequireAuth />}>
          <Route index element={<Home />} />
        </Route>


      </Routes>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
