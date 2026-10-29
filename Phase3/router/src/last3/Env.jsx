import React from 'react'


const Env = () => {
    let localUrl = import.meta.env.VITE_API_URL
    let userName = import.meta.env.VITE_USER_NAME
  return (
    <div className='bg-blue-200  flex flex-col text-3xl h-screen items-center justify-center'>
      <h1>{localUrl}</h1>
      <button onClick={()=> window.open(localUrl, '_blank')} className='p-2 m-4 bg-blue-50'>Url click</button>
      <h1>{userName}</h1>
    </div>
  )
}

export default Env
