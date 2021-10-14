import React ,{  useState }from 'react'
import {useSelector,useDispatch} from "react-redux"
import { BuyCake } from './main'


function SelectorHook() {
    const setector = useSelector(state =>state.numofCake)
    const dispatch = useDispatch()

    // const has= e=>{
    //     console.log(e.target.value)
    // }
    return (
        <div>
            {/* <input onChange={has}/> */}
            <h3>It is qiute similar to State to props function</h3>
            <p>
                <ul>we have to import the setector and Disaptch Hookm from Redux by using this we can use the state thet we have in reduc Store</ul>
                <ul>It return the state of componenet</ul>
            </p>
        <h3>UseDispatch Hook</h3>
        <p>
            <ul>we can dispatch tha action by using this hook and pass action as a parameter in dispatch</ul>
        </p>
        <h2>{setector}</h2>
        <button onClick={()=>dispatch(BuyCake())}>Buy Cake</button>
            <h5>we can also use React HOOK and Higher Order Compnents to pass Date to the child components we want to pass in our app </h5>
            <Inpu/>
            {/* <Inpu props="Ali"/> */}
        </div>
    )
}

export default SelectorHook


export  function Inpu({props ,children}) {
    const [la,setLa]=useState('')
     
    const ham =(e)=>{
        console.log(e.target.value)
           setLa(e.target.value)
    }
    return (
        <div> This is a input componet we will pass datat from this compnte to different componenets
            <br/>
        <input onKeyDown={ham}/> 
        <br/>
        UseState Hook and set Value to an ampty object    
        <h1>Name: {la} </h1>
        {/* <h5>{props}</h5> */}
        <h1>Below component is the child comp-onet</h1>
        <Has props={la}/>
        </div>
    )
}

// child to parent data passing
export function Has({props}) {
    
    return(<div>
        <h1> Child: {props}</h1>
    </div>)
}

