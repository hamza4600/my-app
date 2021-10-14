import React ,{ useRef, useState,useEffect} from 'react'
import { Span } from './effectHook'

function Ref() {
    return (
        <div className={"azz"}>
            <h3>Example of Ref</h3>
            <h4>It is mostaly used in input field</h4>
            <ul>UseRef return mutable Value with <Span props="current"/> and <Span props="(initalvalue)"/></ul>
            <ul>Common exaple is used in Input Taba</ul>
            <RefOne/>
            <h2>Forword Ref </h2>
            <li>it is used to pass down datat or State to childern Components</li>
            <li>Below componet also contain childern componet</li>
            <FanButon>Press Me</FanButon>
                <RefEx/>
        </div>
    )
}

export default Ref

export function RefOne() {
    const [ua,setUa] =useState('')
    const refa = useRef(null)
    const pal=(e)=>{
        setUa(e.target.value)
    }
    const lal =()=>{
        refa.current.focus()
        console.log(refa)
    }
    return(
        <div>
            <span>Name :</span> 
            <input placeholder="Name"
            ref={refa} onChange={pal} type="text"
            /><br/>
            <button onClick={lal}>Click Me</button>
            <h3>Value is :{ua}</h3>
            <ul className={'o'}>we can say useRef is like a Box that can hold Value <Span propr="current"/> and other It have other properties like object we can access key and Value </ul>
            <ul>It corispond whenevevr node changes </ul>
        </div>)

}
// forword ref 
export function FanButon(props) {
    
    return(<div> 
        <button onClick={()=>alert("Hello world")}>{props.children}</button>
    </div>)
} 
// exapme
export function RefEx({props}) {
    const [op,setop]=useState('')
    const refs= useRef(0)
    const refa= useRef("")
    useEffect(()=>{
        refs.current=refs.current+1
    })
    const pol=(e)=>{
        setop(e.target.value)
    }

    const qwe=()=>{
        refa.current.focus()
        refa.current.value = "Not Happy"
    }

    return(<div>
        <br/>
        <h1>Main</h1>
        <li className={"oz"}>Every time a component is updatede it will re-render the whole componet that wll lead us to infinate loop that is not a good thing it will make our app a-lot  slower</li>
        <li className={"oz"}><Span props="Ref"/> is an object having key and value </li>
        <li className={"oz"}>we can use <Span props="ref"/> insted of useState  it does not re-render a component again and again ,hold previous state value in it is seperate from componet re-render cycyle</li>
        <li>Each elemts in HTML have a refs attribute </li>
        <li><Span props="Ref"/> update the value not the state Refs shold alway added to input so it work </li>
        <li></li>





        <input value={op} placeholder="Name" onChange={pol} ref={refa}/>
        <h3>Your Name is : {op}</h3>
        <h3>Render Items are : {refs.current}</h3>
        <button onClick={qwe}>Click</button>
    </div>)
}