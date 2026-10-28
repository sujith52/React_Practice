import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import About from '../components/About'
import Image from '../components/Image'

const ErroredPage = () => {
  return (
    <>
        <About/>
        <ErrorBoundary>
            <Productss/>
        </ErrorBoundary>
        <Image/>
    </>
  )
}

export default ErroredPage

function Productss(){
    throw new Error("products has failed")
    return <h1>Products</h1>
}