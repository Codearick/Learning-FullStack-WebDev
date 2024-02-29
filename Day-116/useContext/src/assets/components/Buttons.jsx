import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../../context/context'

const Buttons = () => {
    const value = useContext(counterContext)
  return (
    <div>
        <span><Component1/></span>
        <button onClick={() => value.setCount((count) => count+1)}>I am a button</button>
    </div>
  )
}

export default Buttons