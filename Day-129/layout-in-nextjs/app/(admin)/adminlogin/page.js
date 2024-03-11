import React from 'react'

const page = () => {
  return (
    <div>Admin login page</div>
  )
}

export default page

 
// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: 'AdminLogin Facebook: Connect with people around the world.',
  }
}