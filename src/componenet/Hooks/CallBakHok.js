import React,{useState,useEffect,useCallback} from 'react'
import { Span } from './effectHook'

function CallBakHok() {
    return (
        <div className={"azz"}>
            <h3>It is quite Similar To use Memo </h3>
            <ul><Span props="What is callback hook?"/>
The useCallback hook is used when you have a component in which the child is rerendering again and again without need. Pass an inline callback and an array of dependencies</ul>
            <li>It is use for performance Componet sharing Same code  </li>
            <li>useMemo does,nt return a function But Usecallback return a FUnction and values</li>
            <li>THe probkum is that if  we change the THem onCLik It also re-render compnet agin that is not good maker app Slow</li>
            <CallOne/>
        </div>
    )
}

export default CallBakHok

// first
export function CallOne({props}) {
    const [ha,setHa]=useState(1)
    const [ga,setGa]=useState(false)
     const getItems=useCallback(()=>{
        return [ha, ha+1, ha+2]
    },[ha])
    const them={
        backgroundColor: ga ? "#333" : "#FFF",
        color: ga ? '#FFF' : "#333"
    }
    const jzx=(e)=>{
        setHa(parseInt(e.target.value))
    }
 
    return (
        <div className={"azz"}>
            <div style={them}>
            <li>Input Give Three result</li>
            <input  placeholder="Number" type="number"  onChange={jzx}/>
            <button onClick={()=>setGa(preDrk=>!preDrk)}>Press Me</button>
            <li>Result is {ha}</li>
            <Sons getItems={getItems}/>
            </div>
        </div>)
}
// uppper same
export function Sons({getItems}) {
    const [item,setItem]=useState([])
    useEffect(()=>{
        setItem(getItems())
        console.log(`?UseCall back hook`)
    },[getItems])
    return(<div>
        {item.map(items=><li key={items}> {items} </li>)}
    </div>)
}