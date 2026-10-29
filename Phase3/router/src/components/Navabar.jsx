import React from 'react'
import { Link } from 'react-router-dom'

const Navabar = () => {
  return (
    <>
      <div className='bg-blue-50 p-6 m-1 flex flex-wrap text-center gap-6 justify-center items-center font-medium shadow-sm'>
        {/* Basic Routes */}
        <Link to="/" className='hover:text-blue-600 transition-colors'>Home (Navabar)</Link>
        <Link to="/above" className='hover:text-blue-600 transition-colors'>About</Link>
        <Link to="/img" className='hover:text-blue-600 transition-colors'>Image</Link>
        <Link to="/para/101" className='hover:text-blue-600 transition-colors'>UseParams (101)</Link>
        <Link to="/navs" className='hover:text-blue-600 transition-colors'>Navigate</Link>

        {/* Protected / Auth Routes */}
        <Link to="/profile" className='hover:text-blue-600 transition-colors'>Profile (Protected)</Link>

        {/* Layout / Nested Routes */}
        <Link to="/h" className='hover:text-blue-600 transition-colors'>Main Page (/h)</Link>
        <Link to="/prod" className='hover:text-blue-600 transition-colors'>Products (/prod)</Link>

        {/* Lazy Loaded & Special Routes */}
        <Link to="/home" className='hover:text-blue-600 transition-colors'>Home Pages</Link>
        <Link to="/dash" className='hover:text-blue-600 transition-colors'>Dashboard (Lazy)</Link>

        {/* Forms, Zod, and Last3 Routes */}
        <Link to="/zod" className='hover:text-blue-600 transition-colors'>Register (Zod)</Link>
        <Link to="/error" className='hover:text-blue-600 transition-colors'>Error Page</Link>
        <Link to="/env" className='hover:text-blue-600 transition-colors'>Env Config</Link>
        <Link to="/button" className='hover:text-blue-600 transition-colors'>ReuseLoading / Button</Link>
        <Link to="/shad" className='hover:text-blue-600 transition-colors'>shad sn button</Link>
      </div>
      <Navs />
    </>
  )
}

export default Navabar

function Navs() {
  return (
    <div className='bg-gray-200 h-screen text-red-400 flex items-center justify-center text-4xl'>
      hello nav bar !
    </div>
  )
}