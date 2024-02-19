import { useState, useEffect } from 'react'
import './App.css'

async function App() {
  const [count, setCount] = useState(0)
  const a = fetch(`https://jsonplaceholder.typicode.com/posts`);
  const b = await a;
  console.log(b.toString());
  return (
    <>

    </>
  )
}

export default App
