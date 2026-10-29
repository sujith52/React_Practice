import React from 'react'

const Card = ({title, children}) => {
  return (
    <div className='h-60 bg-blue-200 p-2 m-4 flex flex-col items-center justify-center '>
      <h1 className='text-4xl text-gray-600 p-2 m-1'>{title}</h1>
      <div className='text-xl p-1 m-1 '>
        {children}
      </div>
    </div>
  )
}

export default Card
