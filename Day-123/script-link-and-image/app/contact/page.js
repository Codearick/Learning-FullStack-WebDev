import React from 'react'
import Script from 'next/script'

const Contact = () => {
  return (
    
    <div>
    <Script>{`alert("Welcome to contact page");`}</Script>
    This is Contact us page
    </div>
  )
}

export default Contact
export const metadata = {
  title: "Contact Facebook - Connect with world using Facebook",
  description: "This is the contact of facebook and we can connect with the world using facebook",
};