import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value,setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logoText="CodeWithRehan"/>
      <div className="counter">{value}</div>
      <button onClick={()=>{setValue(value+1)}}> Clickme</button>
      <button onClick={()=>{setValue(0)}}>Reset</button>
      <Footer/>
    </div>
  );
}

export default App;
