import React from 'react'

const Input = ({
    label, err, id, ...props
}) => {
  return (
    <div className='bg-blue-200 p-2 m-1 text-xl'>
      <label htmlFor="{id}">{label}</label>
      <input id={id} className='m-2  border-2' {...props} />
      {err && <p className='text-red-500 p-2 m-1'>{err}</p>}
    </div>
  )
}

export default Input
