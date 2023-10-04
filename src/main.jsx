import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'

import Routes from './Routes/Routes'
import AuthContext from './AuthContext/AuthContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
    <RouterProvider router={Routes}></RouterProvider>
    </AuthContext>
  </React.StrictMode>,
)
