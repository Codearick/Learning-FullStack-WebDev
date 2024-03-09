'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col items-center justify-center m-5 p-5'>
      <h2 className='text-red-500'>Kuch Gadbad Hai Bhai ! Error Aa Gaya !</h2>
      <button className='border p-1 mt-3'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}