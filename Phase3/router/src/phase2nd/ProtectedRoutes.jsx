import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoutes = () => {
  let isLogged = false
  return isLogged ? <Outlet/> : <Navigate to="/navs" replace />
}

export default ProtectedRoutes
