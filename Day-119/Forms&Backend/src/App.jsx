import { useState } from 'react'
import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: {errors,isSubmitting },
  } = useForm()

  const delay = async (a) =>{
    return new Promise((resolve,reject)=>{
      setInterval(() => {
        resolve();
      }, a*1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(2); //simulating network delay
    console.log(data)
    let request = await fetch("http://localhost:3000/",{method: "POST", headers:{
      "Content-Type":"application/json",
    },body:JSON.stringify(data)});
    let response = await request.text();
    console.log(data, response);
    // if(data.username !== "Rohan"){
    //   setError("myform", {message: "Sorry only Rohan is allowed!"})
    // }
    // else if(data.username == "Harry"){
    //   setError("blocked", {message: "Sorry Harry is not allowed!"})
    // }
  }

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          Username:<input placeholder='Username' type="text" {...register("username",{required: true, minLength:{value:4,message:"Minimum 4 letters"},maxLength:{value:10,message:"Maxiumum 10 letters"}})} id="" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br/>
          Password:<input placeholder='Password' type="password" {...register("password")} id="" />
          <br/>
          <input disabled={isSubmitting} type="submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className="red">{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
