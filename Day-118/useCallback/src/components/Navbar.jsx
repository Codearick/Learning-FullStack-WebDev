import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {
    console.log("Navbar is rendered!");
  return (
    <>  
    <div>I am a {adjective} Navbar</div>
    <button onClick={()=>getAdjective()}>{getAdjective()}</button>
    </>
  )
}

export default memo(Navbar)