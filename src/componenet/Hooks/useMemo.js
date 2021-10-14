 import React ,{useState,useMemo,useEffect} from 'react'
import { Span } from './effectHook'

function Memo() {
    return (
        <div className={"azz"}>
            <h3>we will discuss Meme Hook in detail</h3>
            <h2>When ever there is any change in componet or Update It is re-render again That mak it slow </h2>
            <OneMemo/>
        </div>
    )
}

export default Memo
 
export function OneMemo(params) {
    const [sa,setSa]=useState('')
    const DoubleNUm= useMemo(()=>{
         return   SlowFunction(sa)
        },[sa]) 
    const [dark,setDark]=useState(false)
    const themStyle={
        background: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

        function SlowFunction(num){
            console.log(":Calling Slow function")
            for(var i=0;i<=10000;i++){
                console.log(i)
            }
            return num*2
        } 

    return (<div>
        <li>Once we update state in react It re-render whoel componet that make app a bit slower</li>
        <li>so tosolve this problum React have a Hooks Memo that have a catch value of our slow function so it don,t have to compute it </li>
        <li>Below is an example of this that run a loop</li>
        <li>It also Have Dependcy arary that check if elemts are same then it do,nt  re-render state </li>
        <li>It increase the Performanc of App  and store the prevState in Meomry and Increase Meonmry Size</li>
        <li><Span props="When to use"/> When we are calling the functions   that are slow </li>
        <li>Memo also have Dependacy of Array That check what is Changing so it re-Calculate</li>

        <input placeholder="Number" value={sa} value={sa} onChange={e=>setSa(parseInt(e.target.value))}/>
        <h2>{sa} is value Answer is {DoubleNUm}</h2>
        <h2>loop Over : 10000</h2>
        <button style={themStyle} onClick={()=>setDark(prevDark=> !prevDark)}> Change them</button>
        <div style={themStyle}>  Pakistan  {DoubleNUm}</div>
        <li>Now we have use Memo Hook IT will Not re-render Stata Again And again Check Dependacy Array The wil perform Action</li>
        <li></li>
    </div>)
}