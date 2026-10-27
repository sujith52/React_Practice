import React from 'react'
import {Link} from 'react-router-dom'
const Image = () => {
  return (
    <div className='bg-blue-300 h-screen flex flex-col align-middle  justify-center items-center'>
      <img src="https://github.com/sujith52/Python_Practice/blob/main/Basic%20Python/File%20Handling/file_handling.jpg?raw=true"
       alt="Well a boy standing alongside with the blue and white color wall with bright face maybe !"
       className=' h-[50%] rounded-xl m-2 ' />
       <figcaption><i>Well it has been a long time.</i></figcaption>
       <Link to="/" className='px-1 m-1 text-blue-600 bg-blue-100 hover:text-red-500'>Home</Link>
    </div>
  )
}

export default Image
