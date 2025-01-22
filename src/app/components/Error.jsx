import React from 'react'
import Navbar from './Navbar'

const Error = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className='flex-grow flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-semibold font-libre-baskerville text-center md:text-left mb-4 sm:text-6xl'>Oops! Something went wrong.</h1>
          <p className='text-2xl mb-6 font-source-sans'>Please try again later.</p>
        </div>
      </div>
    </div>
  )
}

export default Error