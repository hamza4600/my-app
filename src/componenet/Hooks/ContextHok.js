import React,{useState,useContext} from 'react'
import { Span } from './effectHook'

function ContextHok() {
    return (
        <div className={"azz"} >
            <h2>UseContext Hook</h2>
            <li>It is quite similar to Redux Store We can provide Value to any Compnet we want In our App  as a Props</li>
            <li>It has two pARTS <Span props="Context Provider"/> and  <Span props="Context Consumer"/> that provide data to the childeern component in app </li>
            <li>It has  a value that in  pass a s props </li>
            <li>We have to creat a contex() and themuse as a Provider and Consumer</li>
            <li>UseContext Hook make <Span props="Consumer"/> value more easy</li>
            <li></li>
             <ContexOne/>  
               </div>
    )
}

export default ContextHok

// ffirst
export function ContexOne({props}) {
    const [ui,setUi]=useState('')

    return(<>
        <h3>Contex component </h3>
        <li>I hAve created a class compnet for my example but it is not workoing</li>
        <li></li>
        <li>
        </li>
        <OneContex/>
    </>)
}
// correct
export const UseContex=React.createContext()


export function OneContex({props}) {
    const [re,setRe]=useState(false)
    const [de,setDe]=useState("")
    const themX={
        backgroundColor: re ? '#333': '#CCC' ,
        color: re ?'#CCC' : '#333',
        padding: '2rem',
        margin: '2rem',

    }

    const ku=()=>{

        setRe(preGrk=> !preGrk)
    }
    return (<div style={themX}>
        <UseContex.Provider value={de}>
        <h3>ThemCreated</h3>
        <button onClick={ku}>Press Me</button> <br/>
        <input placeholder="Name" onChange={(e)=>setDe(e.target.value)}/>
        <li>Pass down Name to compnents Childern</li>
            <Chiledn/>
           </UseContex.Provider> 
    </div>)
}

export function Chiledn({props}) {
    
    return(<div>
        <li>This is childern componets</li>
        <ChildTwo/>
        <Final/>
    </div>)
}

export function ChildTwo({props}) {
    
    return(<div>
        <UseContex.Consumer >
        {de=>{
            return <div>use value is {de}</div>
        }}
        </UseContex.Consumer>
        <li>Value is passed from Two componet down to childern compnet</li>
    </div>)
}
// this can be done AS
export  function Final() {
        const use= useContext(UseContex)
    return(<div>
         <h3>{use}</h3>
        <ul>Final Component</ul>
    </div>)
}








// class compnert

// export function Mainx(){
//     const [darkThem,setdarkThem]=useState(true)
//     function toggelthem(params) {
//         setdarkThem(preDarkthm=>!preDarkthm)
//     }
//     return(<div>
//         <>
//         <ThemContext.Provider value={darkThem}>
//             <button onClick={toggelthem}>Presss Me</button>
//         <FunctionContex/>
//         <ContexTwo/>
//         </ThemContext.Provider>
        
//         </>

//     </div>)
// }

// export   class ContexTwo extends Component {
//     themStyle(dark){
//         return {
//             backgroundColor: dark ? '#333' : '#CCC',
//             color: dark ? '#CCC' : '#333',
//             padding: '2rem',
//             margin: '2rem'
//     }}
//     render(){
      
//             return(   <ThemContext.Consumer>
//                 <li>Class Componets</li>
//                 {darkThem=>{
//                 return<div style={this.themStyle(darkThem)}>Class Componets Created</div> 
//                 }}
//              </ThemContext.Consumer>
//             )
//     }

// }
// // ?function comet 
// export function FunctionContex() {
    
//     return(<div><h2>Function Component</h2></div>)
// }