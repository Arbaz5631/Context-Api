import React,{useState,createContext} from 'react'
export const DataContext=createContext();
function DataContextComponent(props) {
    const [data,setData]=useState([
        {
        student:"Arbaz khan"
        },
        {
            student:"Kunal"
        }
    ])
    return (
        <div>
        <DataContext.Provider value={[data,setData]}>
             {props.children}
        </DataContext.Provider>
            
        </div>
    )
}

export default DataContextComponent;
