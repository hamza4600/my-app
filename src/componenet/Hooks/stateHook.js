import React,{useState} from 'react'
import './style.css'
function OneHook() {
    return (
        <div className={'aa'}>
            <h1>This is the practice example of state and functional components</h1>
            <One/>
            <Two first="Hamza"
            second="Hassan"
            three="samer"
            four="Ameer Khan"/>
            <Three/>
        </div>
    )
}

export default OneHook
export function One(params) {
    const [sa ,setSa]= useState('')
    const had=e=>{
        setSa(e.target.value)
    }
    return(<div>
        <h3>This is a parent componet</h3>
        <span>Name : </span>
        <input placeholder="Name" onChange={had}/>
            <h2>{sa}</h2>
            <Child props={sa}/>
    </div>)
}
export function Child({props}) {
    
    return (
        <div>
            <p>This is childern componenet Now Data pass in tparent will also be apper in THis componenet</p>
                <ul>we have simply pass the props as a sate in childern componenet</ul>
                <ul>we can also apply our Bussines Logic for the App</ul>
            <h2>{props}</h2>
        </div>)
}
// now we will apss seversal props inA SIgaler componetas
export function Two({first,second,three,four}) {
    
    return (
        <div>
            <h3>Passing several props in a single component</h3>
            <h4>First Props :{first}</h4>
            <h4>SEcond Props :{second}</h4>
            <h4> Three :{three}</h4>
            <h4>Four : {four}</h4>
                <h5>we can pass several props according to requirment </h5>
 
      </div>)
}
//creat a object using Hooks
export function Three(params) {
        const [ga,setGa]=useState('')
        const [ta,setTa]=useState({id:'',name:'',age:''})
        
    const jas = e=>{
        const hz= (e.target.value)*10
        setGa(hz)
    }
    return(<div>
        <h3>Usa A Hook as a Object to store state of several componenets or creata diffrenet state for diffrent objects </h3>
        <ul>{JSON.stringify(ta)}</ul>
        <ul>By using JSON string function and represented the Object </ul>
        <ul>Object will be called like (ta.id: ) and will give the value</ul>
        <ul>we can also manuplate the state of componet</ul>
        <span>Number : </span>
        <input placeholder="Numbers" onChange={jas}/>
        <h5> Result   :{ga}</h5>
    </div>)
}
