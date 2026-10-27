import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navigate = () => {
    let navs = useNavigate()
    function handleSubmit(){
        navs("/")
    }
  return (
    <div className='bg-blue-300 h-screen flex flex-col gap-3'>
        <h1 className='text-2xl text-blue-900'>Form to use useNavigate:</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='enter name sujith'
        className='p-3 bg-blue-100 text-black text-xl' /> <br />
        <input type="submit" />
      </form>
      <button onClick={handleSubmit}>Home button</button><br />
      <button onClick={()=>{navs("/img")}}>Image</button>
    </div>
  )
}

export default Navigate
