import { useState } from "react"
import Q_1comp from "./Q_1comp"

const Q_1_1Comp=(props)=>{
    const [togg,setTogg]=useState("")
    const handleLogout=(e)=>{
        e.preventDefault()
        setTogg(false)

    }
    return (
        <div>
 <h1>All details</h1>
 <h3>{props.username}</h3>
 <h3>{props.address}</h3>
 <h3>{props.password}</h3>
 <h3>{props.email}</h3>
 <h3>{props.city}</h3>
 <h3>{props.pin}</h3>

 <button onClick={(e)=>handleLogout(e)}>log out</button> 
 

        </div>
    )
}
export default Q_1_1Comp