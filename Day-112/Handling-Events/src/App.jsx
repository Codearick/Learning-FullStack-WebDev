import { useState } from 'react'
import './App.css'

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [form, setform] = useState({})

  const handleClick = () => {
    alert(`Hey I am clicked`);
  }

  const handleYellowDiv = () => {
    setIsMouseOver(true);
  }
  const handleRedDiv = () => {
    setIsMouseOver(false);
  }

  const handleNameChange = (e) =>{
    setform({...form, [e.target.name]:e.target.value});
    console.log(form);
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>
          click me
        </button>
      </div>
      <div onMouseEnter={handleYellowDiv} onMouseLeave={handleRedDiv} className={`${isMouseOver ? `yellow` : `red`}`}>
        {isMouseOver ? `I am a yellow div` : `I am a red div`}
      </div>
      <div className="input flex gap-5 mt-7">
        <input  type="text" name='name' value={form.name?form.name:""} onChange={handleNameChange} />
        <input  type="email" name='email' value={form.email?form.email:""} onChange={handleNameChange} />
      </div>
    </>
  )
}

export default App
