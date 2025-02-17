import React from 'react'
import ErrorPage from '../../assets/images/error.svg'
export default function Error() {
  return (
    <>
    <div className="container m-auto flex justify-center items-center min-h-screen">
      <img className='w-96 text-center' src={ErrorPage} alt="Error Page" />
    </div>
    
    
    </>
  )
}
