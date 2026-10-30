import React from 'react'
import NabBar from './NabBar'
import {Button} from './ui/button'

const Hero = () => {
  return (
    <div>
      <div className='h-screen bg-linear-to-br from-blue-500 to-purple-200 text-white'>
        <NabBar/>
        <div className='m-2 h-[25%] flex flex-col justify-center items-center bg-white/10 border rounded-xl  border-white/20 backdrop-blur-md shadow-lg'>
            <h1 className='text-3xl text-center mb-2'><i>ECOM COMMERCE</i></h1>
            <p className='m-1 opacity-80'><i>Ecommerce is not just a trend; it’s the future of business.</i></p>
            <Button className='mt-2 p-3 text-xl'>Shop Now</Button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Hero
