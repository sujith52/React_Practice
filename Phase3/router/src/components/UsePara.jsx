import React from 'react'
import {useParams} from 'react-router-dom'

const UsePara = () => {
    let {productId} = useParams()
  return (
    <div className='bg-blue-600 h-screen text-2xl text-center'>
      <h1 className='text-white text-4xl p-4 items-center'>Product Id : {productId}</h1>
    </div>
  )
}

export default UsePara
