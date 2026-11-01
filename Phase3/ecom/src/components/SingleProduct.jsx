import {useFetch} from './Products'
import {useParams, Link} from 'react-router-dom'
import React from 'react'

const SingleProduct = () => {
    let {id} = useParams()
    let {data: prod, err, load} = useFetch(`https://dummyjson.com/products/${id}`)
    if(load) return <h1>Loading</h1>
    if(err) return <h1>Error : {err}</h1>
  return (
    <div className=' bg-linear-to-br h-screen from-blue-200 to-blue-600'>
      <Link to='/' className='p-2 bg-white/50 rounded-2xl m-2 hover:bg-blue-400 '>Back to Products</Link>
      {prod && (
        <div className='m-0.5'>
            <div className='flex items-center justify-center'>
                <img 
                src={prod.thumbnail} alt={prod.title} />
            </div>
            <div className='  '>
                
                <h1 className='text-center text-2xl p-3'>{prod.title}</h1>
                <p className='text-xl'>Brand : {prod.brand}, <span className='p-2 rounded-xl'>{prod.category}</span></p>
                
            </div>
            <p className='text-xl pt-2 pb-3'>{prod.description}</p>
            <div className='text-black grid grid-cols-2 p-2  gap-2 text-center bg-white/10 rounded-2xl '>
                <p>Availablity : {prod.availabilityStatus} ({prod.stock}) Left</p>
                <p>Shipping : {prod.shippingInformation}</p>
                <p>Warranty : {prod.warrantyInformation}</p>
                <p>Return policy : {prod.returnPolicy}</p>
            </div>
        </div>
      )}
    </div>
  )
}

export default SingleProduct
