import React ,{useContext} from 'react'
import { DataContext } from './DataContext'
function Component2() {
    const [data,setData]=useContext(DataContext)
    return (
        <div>
        <h1 style={{color:"red"}}>Data of componet 2</h1>
        {data.map(data=>{
            
            return <h2>{data.student}</h2>
        })}
            
        </div>
    )
}

export default Component2
