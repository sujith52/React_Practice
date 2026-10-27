import React from 'react'
import {Link} from 'react-router-dom'

const Navabar = () => {
  return (
    <>
    <div className='bg-blue-50 p-4 m-1 flex flex-col text-center gap-4 justify-between'>
        <Link to="/">Home</Link>
        <Link to="/above">About</Link>
        <Link to="/img">Image</Link>
        <Link to="/para/101">UseParameters</Link>
        <Link to="/navs">useNavigation</Link>
    </div>
    <Navs/>
    </>
  )
}

export default Navabar

function Navs(){
    return(
        <div className='bg-gray-200 h-screen text-red-400 text-center justify-center align-middle text-4xl'>
            hello nav bar !
        </div>
    )
}