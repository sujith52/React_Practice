import React from 'react'
import {Link} from 'react-router-dom'

const Functions = () => {
  return (
    <div className='bg-blue-50 text-2xl m-2 p-2 flex gap-4 justify-around'>
      <Link to='/'>Home</Link>
      <Link to='/dash'>Dash</Link>
    </div>
  )
}

export function Dashboards(){
    return(
        <div>
            <Functions/>
            <h1>Hello dash board bro !</h1>
        </div>
    )
}
export function Homes(){
    return(
        <div className='h-screen bg-blue-300 text-4xl'>
            <Functions/>
            <h1>Hello sujith bro !</h1>
        </div>
    )
}