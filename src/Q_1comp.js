import { useState } from "react"
// import {Navigate, useParams} from "react-router-dom"
import Q_1_1Comp from "./Q_1_1Comp"
import "./Q_1Comp.css"
const Q_1comp=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")
    const [pin,setPin]=useState("")

    
    const [flag,setFlag]=useState(false)




    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleAddress=(e)=>{
        setAddress(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handlePin=(e)=>{
        setPin(e.target.value)
    }
    const handleCity=(e)=>{
        setCity(e.target.value)
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        setFlag(true)

    }
    return(
<div className="det">
<form>
                  <input type="text" placeholder="Enter your username" onChange={(e)=>handleUsername(e)}></input>
                  <input type="text" placeholder="Enter your email" onChange={(e)=>handleEmail(e)}></input>
                  <input type="text" placeholder="Enter your address" onChange={(e)=>handleAddress(e)}></input>
                  <input type="text" placeholder="Enter your password" onChange={(e)=>handlePassword(e)}></input>
                  <input type="text" placeholder="Enter your city" onChange={(e)=>handleCity(e)}></input>
                  <input type="text" placeholder="Enter your pin code" onChange={(e)=>handlePin(e)}></input>
                  <button onClick={(e)=>handleLogin(e)}> login</button>
                  {flag?(<Q_1_1Comp username={username} email={email} address={address} password={password} 
                  city={city} pin={pin}
                  ></Q_1_1Comp>):<></>}
                  </form>
</div>

    )
}
export default Q_1comp