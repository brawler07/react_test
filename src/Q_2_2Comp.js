import { useState } from "react"
const Q_2_2Comp=(props)=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [arr,setArr]=useState([])
    const [flag,setFlag]=useState(true)

    const handleName=(e)=>{
        setName(e.target.value)
    }
   
    const handleDetails=(e)=>{
        console.log(name)
        e.preventDefault()
        // console.log(props.details)
        setArr(props.details.find(item=>item.name===name))
        // console.log(arr)
    }
    return(
        <div>


                    <input type="text" placeholder="Enter your Name" onChange={(e)=>handleName(e)}></input>
                
                  <button onClick={(e)=>handleDetails(e)}> Show details</button>

                  <h1>{arr.name}</h1>
                  <h1>{arr.email}</h1>
                  <h1>{arr.phone}</h1>



        </div>
    )
}
export default Q_2_2Comp