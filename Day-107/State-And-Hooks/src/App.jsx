import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count * 2)}}>Update</button>
      <button onClick={()=>{setCount(2)}}>Reset</button>
    </> 
  )
}
export default App