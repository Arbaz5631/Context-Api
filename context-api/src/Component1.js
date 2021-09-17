import React ,{useContext}from 'react'
import { DataContext } from './DataContext'
function Component1() {
    const [data,setData]=useContext(DataContext)
    return (
        <div>
        <h1 style={{color:"red"}}>Data of componet 1</h1>
        {data.map(data=>{
            return <h2>{data.student}</h2>
        })}
            
        </div>
    )
}

export default Component1
