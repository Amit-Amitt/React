import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate=useNavigate();
    let goto=()=>
    {
        navigate("/aboutus")
    }
  return (
    <div>Home
        <button onClick={goto}>About us</button>
    </div>
  )
}
