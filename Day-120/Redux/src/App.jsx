
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
    <Navbar count = {count}/>
    <div> 
    <button onClick={()=> dispatch(decrement())} >-</button>
    <span>
      Currently the count is {count}
    </span>
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch(multiply())}>x</button>
    </div>
    </>
  )
}

export default App

