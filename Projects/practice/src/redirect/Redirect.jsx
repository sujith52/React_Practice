import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import React from 'react'
import {Dashboard, Home} from './Functions'

const Redirect = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route to='/' element={<Home/>} />
            <Route to='/dash' element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Redirect
