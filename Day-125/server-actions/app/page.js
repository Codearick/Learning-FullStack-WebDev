"use client"
import {useRef} from 'react'
import {submitAction} from '@/actions/form'

export default function Home() {

  let ref = useRef();

  return (
    <div className="container ">
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" className="text-black m-2 p-2" />
        </div>
        <div>
        <label htmlFor="Address">Address</label>
        <input name="add" id="add" type="text" className="text-black m-2 p-2" />
        </div>
        <div>
        <button className="border m-2 p-2">Submit</button>
        </div>
      </form>
    </div>
  );
}
