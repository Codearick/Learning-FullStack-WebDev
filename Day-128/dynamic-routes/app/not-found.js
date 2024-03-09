import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center m-10 p-5 gap-2'>
      <h2 className='font-bold text-3xl'>404 Not Found!</h2>
      <p className='font-bold text-xl'>MAAL NAHI HAI BHAI !</p>
      <Link href="/" className='hover:underline text-blue-500'>Home ?</Link>
    </div>
  )
}