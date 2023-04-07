import { useState } from "react"
import './App.css';


export const Button = ({ name })=>{
    const [count,setCount] = useState(0);

    const handleClick = ()=>{ setCount(count + 1)}
    const handleReset = ()=>{ setCount(0) }

    return(
        <div className="contador">
         <h1>{count}</h1>
         <button className="bt-1" onClick={handleClick}>{name}</button>
         <button clasName="bt-1" onClick={handleReset}>Reset</button>   
        </div>
    )
}