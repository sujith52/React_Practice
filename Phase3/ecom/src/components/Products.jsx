import React, { useEffect, useState } from 'react'

const Products = () => {
  let {data, err, load} = useFetch('https://dummyjson.com/products')
  if(load) return <h1 className='text-4xl text-green-600'>Loading !</h1>
  if(err) return <h1 className='text-2xl text-red-500'>Error {err}</h1>
  return (
    <div>
      <h1>Shoping all the carts </h1>
      {data && data.products.map((prod) => (
        <div key={prod.id} className='bg-blue-100 '>
          <div className='h-44 w-44'>
            <img src={prod.images} alt="" />
          </div>
            <h1 className='text-xl text-center'>{prod.title}</h1>
            <p className=''>{prod.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Products
// https://dummyjson.com/carts

function useFetch(url){
  let [data, setData] = useState(null)
  let [err, setErr] = useState(null)
  let [load, setLoad] = useState(null)
  useEffect(()=>{
    fetch(url)
    .then((response)=>{
      if(!response.ok){
        throw new Error(`network response was not good !`)
      }
      return response.json()
    })
    .then((data)=>{
      setData(data)
      setLoad(false)
    })
    .catch((err)=>{
      setErr(err.message)
      setLoad(false)
    })
  },[])

  return {data, load, err}
}