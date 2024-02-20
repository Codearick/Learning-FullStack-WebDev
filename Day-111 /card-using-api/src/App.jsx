import { useState,useEffect } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [posts, setPosts] = useState([
    {
      id:"response.id",
      title:"response.title",
      body:"response.body"
    }
  ])

   useEffect(() => {
    const data = fetch(`https://jsonplaceholder.typicode.com/posts`);
    const response = data.json();
    return () => {
      response;
    }
  },[])
  
  return (
    <>
     <div className="Cards h-[100%] w-full flex flex-wrap justify-center border border-black bg-black text-white">
      {posts.map(post=>{
        <Card id={post.id} title={post.title} body={post.body}/>
      })}
     </div>
    </>
  )
}
export default App
