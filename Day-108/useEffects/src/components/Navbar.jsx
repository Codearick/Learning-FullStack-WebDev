import { useEffect } from "react"
import React from 'react'

const Navbar = ({ color }) => {

    //Case 1: Run on every render without second argument.
    useEffect(() => {
        alert("Running on every render")
    })

    //Case 2: Run only on first render
    useEffect(() => {
        alert("Welcome to my page, this is the first render")
    }, [])

    //Case 3: Run only the certain value is changed
    useEffect(() => {
        alert("color was changed")
    }, [color])

    // Example of clean up function
    useEffect(() => {
        alert("Welcome to my page this is the first render of app.jsx")
        
        return ()=>{
            alert('Component was unmounted')
        }
        }, [])

    return (
        <div>I am a Navbar of {color} color hehe..</div>
    )
}

export default Navbar
