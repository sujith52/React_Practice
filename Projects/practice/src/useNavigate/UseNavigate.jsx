import React from 'react'
import {useNavigate} from 'react-router-dom'

const UseNavigate = ({isloggedin}) => {
    let nav = useNavigate()
    let handleUpdateProfile = e =>{
        e.preventDefault()
        nav('/dashboard')
    }
    let handleRedirect = e => {
        nav('/ohome', {replace: true})
    }
    let goback = () =>{
        nav(-1)
    }
     return (
    <div className='flex gap-4 [&>button]:p-4 [&>button]:m-2 [&>button]:rounded-xl [&>button]:bg-green-200'>
      <button onClick={handleUpdateProfile}>Save and Go to Dashboard</button>
      <button onClick={handleRedirect}>Log Out (Replace History)</button>
      <button onClick={goback}>Go Back</button>
    </div>
  )
}

export default UseNavigate
