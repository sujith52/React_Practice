import React from 'react'
import { Link} from 'react-router-dom'
import {Button} from './ui/button'

const NabBar = () => {
  return (
    <div className='flex justify-between '>
      <div className='m-1 '>
        <Link to='/hello'><Button>Ecom</Button></Link>
      </div>
      <div className='flex gap-1 m-1'>
        <Link to='/hello'><Button>Ecom</Button></Link>
        <Link to='/hello'><Button>Ecom</Button></Link>
        <Link to='/hello'><Button>Ecom</Button></Link>
      </div>
    </div>
  )
}

export default NabBar
