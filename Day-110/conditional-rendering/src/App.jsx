import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setSetshowbtn] = useState(true);
  const [todos, setTodos] = useState([
    {
      title: "Title reloaded",
      desc: "I am a good todo description"
    },
    {
      title: "Title reloaded 2",
      desc: "I am a todo of a pharmacy or medical"
    },
    {
      title: "Title reloaded 3",
      desc: "I am a grocery todo"
    }
  ])

  // const Todo = ({todo})=>{
  //   return(<>
  //   <div className='m-3 border-[1px] border-purple-400'>
  //     <div className="className">{todo.title}</div>
  //     <div className="desc">{todo.desc}</div>
  //   </div>
  //   </>)
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => { setSetshowbtn(!showbtn) }}>Click to show next button</button>
      {showbtn ? <button>True</button> : <button>False</button>}
      {showbtn && <button>Showbtn is true</button>}

      {todos.map(todo => {
        //return <Todo key={todo.title} todo={todo}/>
        return <div className='m-3 border-[1px] border-purple-400'>
          <div className="className">{todo.title}</div>
          <div className="desc">{todo.desc}</div>
        </div>

      })}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
