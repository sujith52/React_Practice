import React from 'react'
import {useParams} from 'react-router-dom'

const Params = () => {
    let {name} = useParams()
  return (
    <div className='h-screen text-5xl text-gray-800 bg-white flex items-center justify-center'>
      <h1>Hello {name} bro</h1>
    </div>
  )
}

export default Params
