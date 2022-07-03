import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import {UserProvider} from './context/UserProvider'
import { NavIconProvider } from './context/NavIconProvider'
import { FirestoreProvider } from './context/FirestoreProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <FirestoreProvider>
      <NavIconProvider>
          <App />
      </NavIconProvider>
      </FirestoreProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)
